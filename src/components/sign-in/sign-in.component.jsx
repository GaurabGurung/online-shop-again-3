import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utility/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

const SignIn = () => {

    const googleHandler = async() => {
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user)
    } 

    return (

        <div className='sign-in-container'>
            <h2> Already have an account? </h2>
            <span> Sign in with your email and password </span>

            <form> 
                <FormInput 
                    type='email'
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    label='Password'
                    required
                />

                <div className='buttons-container'>                    
                    <Button
                        type= 'submit'
                    > Sign In </Button>
                    <Button 
                        buttonType= 'google'
                        onClick= {googleHandler}
                    > Google sign in</Button>
                </div>
            </form>   
        </div>
    )
}

export default SignIn ;