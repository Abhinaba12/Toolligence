import React from 'react'
import { Box, Typography, Card, Stack } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SubjectIcon from '@mui/icons-material/Subject';
import ChatIcon from '@mui/icons-material/Chat';
import JavascriptIcon from '@mui/icons-material/Javascript';
import toast from 'react-hot-toast'

const Tools = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username") || 'Guest';
    return (
        <Box mb={10}>
            <Typography textAlign="center" mt={4} fontWeight="bold" variant='h3' color=''
                sx={{
                    fontSize: { xs: '34px', sm: '32px', md: '40px' },
                }}>
                {`Welcome! ${name}`}
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                // marginTop: '30px',
            }}>
                <Box
                    style={{ marginTop: "30px" }}
                    p={2}>
                    <Typography textAlign="center" mb={2} fontWeight="bold" variant='h5' color=''> 
                        Summary
                    </Typography>
                    <Card onClick={() => navigate("/summary")}
                        sx={{
                            boxShadow: 24,
                            borderRadius: 5,
                            height: 250,
                            width: 250,
                            '&:hover':
                            {
                                cursor: "pointer",
                                border: 1,
                                borderColor: "primary.main"
                            }
                        }}>
                        <Stack
                            p={3}
                            pt={0}
                        >
                            <TextSnippetIcon
                                sx={{
                                    fontSize: 80,
                                    color: 'primary.main',
                                    mt: '30px',
                                }}></TextSnippetIcon>
                            <Typography pl={1.5} fontWeight="bold" variant='h6'>
                                Summary generator
                            </Typography>
                            <Typography pl={1.5}>
                                Summarize long sentences into short sentences
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box
                    style={{ marginTop: "30px" }}
                    p={2}>
                    <Typography textAlign="center" mb={2} fontWeight="bold" variant='h5'>
                        Paragraph
                    </Typography>
                    <Card onClick={() => navigate("/paragraph")}
                        sx={{
                            boxShadow: 24,
                            borderRadius: 5,
                            height: 250,
                            width: 250,
                            '&:hover':
                            {
                                cursor: "pointer",
                                border: 1,
                                borderColor: "primary.main"
                            }
                        }}>
                        <Stack
                            p={3}
                            pt={0}
                        >
                            <SubjectIcon
                                sx={{
                                    fontSize: 80,
                                    color: 'primary.main',
                                    mt: '30px',
                                }}></SubjectIcon>
                            <Typography pl={1.5} fontWeight="bold" variant='h6'>
                                Paragraph generator
                            </Typography>
                            <Typography pl={1.5}>
                                Generate paragraphs with words
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box
                    style={{ marginTop: "30px" }}
                    p={2}>
                    <Typography textAlign="center" mb={2} fontWeight="bold" variant='h5'>
                        Chatbot
                    </Typography>
                    <Card onClick={() => navigate("/chatbot")}
                        sx={{
                            boxShadow: 24,
                            borderRadius: 5,
                            height: 250,
                            width: 250,
                            '&:hover':
                            {
                                cursor: "pointer",
                                border: 1,
                                borderColor: "primary.main"
                            }
                        }}>
                        <Stack
                            p={3}
                            pt={0}
                        >
                            <ChatIcon
                                sx={{
                                    fontSize: 80,
                                    color: 'primary.main',
                                    mt: '30px',
                                    ml: '5px'
                                }}></ChatIcon>
                            <Typography pl={1.5} fontWeight="bold" variant='h6'>
                                Chat
                            </Typography>
                            <Typography pl={1.5}>
                                Chat with AI
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box
                    style={{ marginTop: "30px" }}
                    p={2}>
                    <Typography textAlign="center" mb={2} fontWeight="bold" variant='h5'>
                        JS
                    </Typography>
                    <Card onClick={() => navigate("/js")}
                        sx={{
                            boxShadow: 24,
                            borderRadius: 5,
                            height: 250,
                            width: 250,
                            '&:hover':
                            {
                                cursor: "pointer",
                                border: 1,
                                borderColor: "primary.main"
                            }
                        }}>
                        <Stack
                            p={3}
                            pt={0}
                        >
                            <JavascriptIcon
                                sx={{
                                    fontSize: 80,
                                    color: 'primary.main',
                                    mt: '30px',
                                    ml: '5px'
                                }}></JavascriptIcon>
                            <Typography pl={1.5} fontWeight="bold" variant='h6'>
                                JS Generator
                            </Typography>
                            <Typography pl={1.5}>
                                Translate english to JavaScript Codes
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
            </Box>
            <div style={{ textAlign: "center", marginBottom: "0", fontFamily: "bold"}}>&copy;Copyright: Abhinaba Roy- <a class="fade" target="_blank" rel="noopener noreferrer" href="#">All Rights Reserved</a></div>
        </Box>

    )
}

export default Tools
