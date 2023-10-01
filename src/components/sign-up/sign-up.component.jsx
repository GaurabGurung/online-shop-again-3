import './sign-up.styles.scss'
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const SignUp = () => {

    return (

        <div className='sign-up-container'>
            <h2> Don't have an account? </h2>
            <span> Sign up with your email and password </span>

            <form>
                <FormInput 
                    type='text'
                    label='Full Name'
                    required
                    />
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
                <FormInput 
                    type='password'
                    label='Confirm Password'
                    required
                />
                
                <div className='buttons-container'>
                    <Button type="submit" > Sign Up </Button>
                </div>
            </form>
        </div>
    
    )
}    

export default SignUp ;