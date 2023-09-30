import Button from '../button/button.component';
import './sign-in.styles.scss'

const SignIn = () => {

    return (

        <div className='sign-in-container'>
            <h2> Already have an account? </h2>
            <span> Sign in with your email and password </span>

            <form> 
                <div>
                    <input 
                        type='email'
                        label='Email'
                    />
                    <input 
                        type='password'
                        label='Password'
                    />
                </div>
                <Button > Sign In </Button>
                <Button> Sign in with Google </Button>
            </form>   
        </div>
    )
}

export default SignIn ;