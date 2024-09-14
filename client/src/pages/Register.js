import React, { useState } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [passworderror, setPasswordError] = useState("")

    // register ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.")
            setTimeout(() => { setPasswordError("") }, 5000)
            return;
        }
        try {
            await axios.post('/api/v1/auth/register', { username, email, password })
            toast.success("Registration successful!")
            navigate('/login')
        } catch (err) {
            console.log(err)
            if (err.response.data.error) {
                setError(err.response.data.error)
            } else if (err.message) {
                setError(err.message)
            }
            setTimeout(() => { setError("") }, 5000)
        }
    }

    return (
        <Box
            style={{ marginTop: "30px" }}
            width={isNotMobile ? '40%' : '80%'}
            p={'40px'} m={'10rem auto'}
            borderRadius={5}
            sx={{
                boxShadow: 24,
                backgroundColor: " ",
            }}
        >
            <Collapse in={!!passworderror}>
                <Alert severity='error' sx={{ mb: 2 }}>{passworderror}</Alert>
            </Collapse>
            <Collapse in={!!error}>
                <Alert severity='error' sx={{ mb: 2 }} >Email alreday registered. Please Sign Up with a different email.</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4' color=''>Sign Up</Typography>
                <TextField
                    color='primary'
                    label="username" required
                    margin='normal'
                    fullWidth value={username}

                    onChange={(e) => { setUsername(e.target.value) }}>
                </TextField>
                <TextField
                    label="email" required
                    type='email'
                    margin='normal'
                    fullWidth value={email}
                    onChange={(e) => { setEmail(e.target.value) }}>
                </TextField>
                <TextField
                    label="password" required
                    type='password'
                    margin='normal'
                    fullWidth value={password}
                    onChange={(e) => { setPassword(e.target.value) }}>
                </TextField>
                <Button
                    color='primary'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{
                        mt: 2,
                    }}>
                    Sign Up
                </Button>
                <Typography mt={2}>Already have an account?
                    <Link to="/login">
                        <b style={{ marginLeft: "4px" }}>
                            Please Login</b>
                    </Link>
                </Typography>
            </form>
        </Box >
    )
}

export default Register
