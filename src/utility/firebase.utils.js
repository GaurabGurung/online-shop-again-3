import { initializeApp,  } from "firebase/app";

import { 
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
 } from 'firebase/auth';

 import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBYCmUMb4mlkdP0_fGfZ_lii9IzMOekng8",
  authDomain: "testing-71c43.firebaseapp.com",
  projectId: "testing-71c43",
  storageBucket: "testing-71c43.appspot.com",
  messagingSenderId: "710097292608",
  appId: "1:710097292608:web:6b30579ae986dde925bea5",
  measurementId: "G-LR62HGQDE3"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider= new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInUserWithRedirect= () => signInWithRedirect(auth, googleProvider)
const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectToAdd) => {
  const collectionRef = collection(db , collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object)=>{
    const docRef = doc (collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })
  await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef =  collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});

  return categoryMap;
}

export const createUserDocumentFromAuth = async(userAuth, additionalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error){
      console.log('error creating the user', error.message);
    }
  }
}

export const createAuthWithEmailAndPassword = async(email, password) => {

  if(!email || !password) return
  return  await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
} 