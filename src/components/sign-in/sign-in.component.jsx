import { useEffect, useState, useContext } from 'react';
import { 
    auth,
    signInWithGooglePopUp, 
    createUserDocumentFromAuth,   
    signInAuthWithEmailAndPassword, 
} from '../../utility/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
    email: '',
    password:''
}


const SignIn = () => {

    const [ formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext)


    const handleChange= (event) => {
        const {value, name} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password)   ;
            setCurrentUser(user);
            setFormFields(defaultFormFields)

        } catch (error) {
            if(error.code === 'auth/invalid-login-credentials'){
                alert('Incorrect Email or Password')
            } else {
                console.log("error", error)
            }
        }
    }

    const logGoogleUser = async() => {

            const {user} = await signInWithGooglePopUp();
            const userDocRef = await createUserDocumentFromAuth(user);
            setCurrentUser(user);
    } 


    return (

        <div className='sign-in-container'>
            <h2> Already have an account? </h2>
            <span> Sign in with your email and password </span>

            <form onSubmit={handleSubmit}> 
                <FormInput 
                    type='email'
                    label='Email'
                    required
                    onChange= {handleChange}
                    name= 'email'
                    value= {email}
                />
                <FormInput 
                    type='password'
                    label='Password'
                    required
                    onChange= {handleChange}
                    name= 'password'
                    value= {password}
                />

                <div className='buttons-container'>                    
                    <Button
                        type= 'submit'
                    > Sign In </Button>
                    <Button 
                        buttonType= 'google'
                        onClick= {logGoogleUser}
                    > Google sign in</Button>

                </div>
            </form>   
        </div>
    )
}

export default SignIn ;