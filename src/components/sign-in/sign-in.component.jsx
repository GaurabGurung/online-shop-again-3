import { useEffect } from 'react';
import { 
    auth,
    signInWithGooglePopUp, 
    createUserDocumentFromAuth, 
    signInUserWithRedirect 
} from '../../utility/firebase.utils';
import {getRedirectResult} from 'firebase/auth'
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

const SignIn = () => {

    const logGoogleUser = async() => {
            const {user} = await signInWithGooglePopUp();
            const userDocRef = await createUserDocumentFromAuth(user)
    } 

    // useEffect( ()=> {
    //     const a = async() => {
    //         const response = await getRedirectResult(auth);

    //         if(response){
    //             createUserDocumentFromAuth(response.user)
    //         } 
    //     }
    //     a()
    // },[])
    return (

        <div className='sign-in-container'>
            <h2> Already have an account? </h2>
            <span> Sign in with your email and password </span>

            <form> 
                <FormInput 
                    type='email'
                    label='Email'
                    required
                    value= ''
                />
                <FormInput 
                    type='password'
                    label='Password'
                    required
                    value= ''
                />

                <div className='buttons-container'>                    
                    <Button
                        type= 'submit'
                    > Sign In </Button>
                    <Button 
                        buttonType= 'google'
                        onClick= {logGoogleUser}
                    > Google sign in</Button>
                    <Button onClick={signInUserWithRedirect} > Redirect</Button>
                </div>
            </form>   
        </div>
    )
}

export default SignIn ;