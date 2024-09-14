import React, { useState, useEffect } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse, Card } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Paragraph = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem("authToken"))
        if (!loggedIn) {
            toast.error("Please sign in to use the available tools.")
            navigate("/login", { replace: true })
            return
        }
    }, [])

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [text, setText] = useState("")
    const [paragraph, setParagraph] = useState("")
    const [error, setError] = useState("")

    // paragraph ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/gemini/paragraph', { text })
            setParagraph(data)
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
            p={'20px'} m={'10rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5, backgroundColor: "white" }}>
            <Collapse in={!!error}>
                <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4'>Generate Paragraph</Typography>
                <TextField
                    color='primary'
                    placeholder='enter the words' required
                    type='text'
                    multiline={true}
                    margin='normal'
                    fullWidth value={text}
                    onChange={(e) => { setText(e.target.value) }}
                    sx={{
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    }}>
                </TextField>
                <Button
                    color='warning'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{
                        mt: 2,
                    }}>
                    Generate
                </Button>
                <Typography mt={2}>Not this tool?
                    <Link to="/tools">
                        <b style={{ marginLeft: "4px" }}>
                            Go back</b>
                    </Link>
                </Typography>
            </form>
            {paragraph ? (
                <Card sx={{ mt: 4, height: "500px", boxShadow: 10 }}>
                    <Typography p={2} sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, whiteSpace: 'pre-wrap', lineHeight: 1.5, overflow: 'auto', maxHeight: '100%' }}>{paragraph}</Typography>
                </Card>
            ) : (
                <Card sx={{ mt: 4, height: "500px", boxShadow: 10 }}>
                    <Typography variant='h5' sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, textAlign: "center", verticalAlign: "middel", lineHeight: "450px" }}>Your paragraph will appear here</Typography>
                </Card>
            )}
        </Box >
    )
}

export default Paragraph
