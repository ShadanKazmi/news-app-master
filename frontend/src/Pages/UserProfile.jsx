import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Header, Segment, Grid, Divider, Image } from 'semantic-ui-react';
import TopBar from '../Components/TopBar';
import BottomBar from '../Components/BottomBar';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const response = await axios.get(`https://news-app-server-fjpt.onrender.com/user/${userId}`);
                setUser(response.data);
                setFormData({
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || '',
                    email: response.data.email || '',
                    gender: response.data.gender || ''
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error('User ID not found in localStorage');
            return;
        }
    
        try {
            const response = await axios.put(`https://news-app-server-fjpt.onrender.com/user/update/${userId}`, formData);
            setUser(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };
    

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TopBar />
            <div className='user-profile'>
                <Container>
                    <Segment>
                        <Grid columns={1} relaxed='very'>
                            <Grid.Column>
                                <Image
                                    src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                                    size='medium'
                                    circular
                                    centered
                                    fluid
                                />
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle'>
                                <Header as='h1' textAlign='center'>
                                    {user.firstName}
                                    <Header.Subheader>Joined in {new Date(user.createdAt).getFullYear()}</Header.Subheader>
                                </Header>
                                <Divider />
                                {editMode ? (
                                    <Form>
                                        <Form.Field>
                                            <label>First Name</label>
                                            <input
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name</label>
                                            <input
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Gender</label>
                                            <input
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>
                                        <Button onClick={handleSave}>Save</Button>
                                        <Button onClick={() => setEditMode(false)}>Cancel</Button>
                                    </Form>
                                ) : (
                                    <div>
                                        <p style={{ fontFamily: "Application", fontSize: "1.5rem" }}><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                                        <p style={{ fontFamily: "Application", fontSize: "1.5rem" }}><strong>Email:</strong> {user.email}</p>
                                        <p style={{ fontFamily: "Application", fontSize: "1.5rem" }}><strong>Gender:</strong> {user.gender}</p>
                                        <Button onClick={() => setEditMode(true)}>Edit</Button>
                                    </div>
                                )}
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Container>
            </div>
            <BottomBar />
        </div>
    );
};

export default UserProfile;