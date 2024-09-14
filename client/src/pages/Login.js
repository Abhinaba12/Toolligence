import React, { useState } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // login ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('/api/v1/auth/login', { email, password })
            const name = result.data.user.username
            localStorage.setItem("username", name);
            toast.success("Sign In successful!")
            localStorage.setItem("authToken", true)
            navigate('/tools', { state: { name } });
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
                backgroundColor: "",
            }}>
            <Collapse in={!!error}>
                <Alert severity='error' sx={{ mb: 2 }}>Invalid credentials</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4' >Sign In</Typography>
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
                    color='success'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{
                        mt: 2,
                    }}>
                    Sign Up
                </Button>
                <Typography mt={2}>Don't have an account?
                    <Link to="/register" >
                        <b style={{ marginLeft: "4px" }}>
                            Please Register</b>
                    </Link>
                </Typography>
            </form>
        </Box >
    )
}

export default Login
