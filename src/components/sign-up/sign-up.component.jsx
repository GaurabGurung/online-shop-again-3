import './sign-up.styles.scss'
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utility/firebase.utils';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () => {

    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;

    const handleSubmit = async(event) => {
        event.preventDefault();
       
            if(password !== confirmPassword){
                alert('passwords do not match')
                return;
            }try{
                const {user} = await createAuthWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, {displayName});

                setFormField(defaultFormField)
            }catch(error){
                if(error.code === 'auth/email-already-in-use'){
                    alert('Cannot create user because the email is already in use')
                } else {
                    console.log('user creation encountered an error', error)
                }
            }
    }

    const handleChange= (event) => {
        const {value, name} = event.target;
        setFormField({...formField, [name]: value})
    }

    return (

        <div className='sign-up-container'>
            <h2> Don't have an account? </h2>
            <span> Sign up with your email and password </span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    label='Full Name'
                    required
                    onChange= {handleChange}
                    name= 'displayName'
                    value= {displayName}
                    />
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
                <FormInput 
                    type='password'
                    label='Confirm Password'
                    required
                    onChange= {handleChange}
                    name= 'confirmPassword'
                    value= {confirmPassword}
                />
                
                <div className='buttons-container'>
                    <Button type="submit" > Sign Up </Button>
                </div>
            </form>
        </div>
    
    )
}    

export default SignUp ;