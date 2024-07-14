import React, { useContext, useState } from 'react'
import logo from '../assets/logo.svg'
import axios from 'axios';
import { CardMeta, CardHeader, CardDescription, CardContent, Card, Icon, Image } from 'semantic-ui-react'
import { FormGroup, FormField, Form, Input, TextArea, Button, Select, } from 'semantic-ui-react'
import { Navigate, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from '../api/LogContext';



const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const SignUp = () => {
    const navigate = useNavigate();
    const isLoggedIn = useContext(isUserLoggedIn);

    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: ''
    });

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleSignUpChange = (e, { name, value }) => {
        setSignUpForm({ ...signUpForm, [name]: value });
    };

    const handleLoginChange = (e, { name, value }) => {
        setLoginForm({ ...loginForm, [name]: value });
    };

    const handleSignUpSubmit = async () => {
        try {
            const response = await axios.post('https://news-app-server-fjpt.onrender.com/user/signup', signUpForm);
            console.log('Sign Up Response:', response.data);
            isLoggedIn.setUserState('Logged-In');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleLoginSubmit = async () => {
        try {
            const response = await axios.post('https://news-app-server-fjpt.onrender.com/user/login', loginForm);
            // console.log('Login Response:', response.data);
            const loggedinToken = response.data.token;
            // console.log("Logged in token", loggedinToken);
            const userId = response.data.userId;
            localStorage.setItem('userId', userId);
            // console.log("THE USER ID IS:", userId);
            isLoggedIn.login(loggedinToken);
            console.log("After calling login");
        } catch (error) {
            console.log('Error logging in:', error);
        }
    };



    if (isLoggedIn.userState === 'Logged-In') {
        navigate('/');
    }

    return (
        
        <div className='auth-screen'>
            <div className='content'>
                <Card centered>
                    <Card.Content>
                        <Card.Header>New User?</Card.Header>
                        <Card.Meta>Sign Up and Get Started</Card.Meta>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' circular centered />
                        <Form onSubmit={handleSignUpSubmit} size='large'>
                            <Form.Input
                                label='First name'
                                placeholder='First name'
                                name='firstName'
                                value={signUpForm.firstName}
                                onChange={handleSignUpChange}
                                required
                            />
                            <Form.Input
                                label='Last name'
                                placeholder='Last name'
                                name='lastName'
                                value={signUpForm.lastName}
                                onChange={handleSignUpChange}
                                required
                            />
                            <Form.Select
                                label='Gender'
                                options={genderOptions}
                                placeholder='Gender'
                                name='gender'
                                value={signUpForm.gender}
                                onChange={handleSignUpChange}
                                required
                            />
                            <Form.Input
                                label='Email'
                                placeholder='joe@schmoe.com'
                                name='email'
                                value={signUpForm.email}
                                onChange={handleSignUpChange}
                                required
                            />
                            <Form.Input
                                label='Password'
                                type='password'
                                name='password'
                                value={signUpForm.password}
                                onChange={handleSignUpChange}
                                required
                            />
                            <Button primary type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
            <div className='content'>
                <Card centered>
                    <Card.Content>
                        <Card.Header>Already a User?</Card.Header>
                        <Card.Meta>Log into your Account</Card.Meta>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' circular centered />
                        <Form onSubmit={handleLoginSubmit} size='large'>
                            <Form.Input
                                label='Email'
                                placeholder='joe@schmoe.com'
                                name='email'
                                value={loginForm.email}
                                onChange={handleLoginChange}
                                required
                            />
                            <Form.Input
                                label='Password'
                                type='password'
                                name='password'
                                value={loginForm.password}
                                onChange={handleLoginChange}
                                required
                            />
                            <Button primary type='submit'>Log In</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
            <div className='bg-image-container'></div>
        </div>
    )
}

export default SignUp
