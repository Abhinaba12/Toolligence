import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import { Link, redirect, useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                mt: "80px"
            }}
        >
            <Box sx={{ width: '80%' }}>
                <Stack spacing={10} mb={8}>
                    <Item sx={{ p: 4, boxShadow: 24 }}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Key Features" {...a11yProps(0)}/>
                                    <Tab label="Benefits" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Typography variant='h6' textAlign="left"
                                    sx={{
                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                    }}>
                                    <ul>
                                        <li><b>Summary Generator:</b> Quickly summarize long articles, research papers,
                                            or any text with our advanced AI summarization tool.
                                            Get to the core of the content in just a few sentences.
                                        </li>
                                        <br />
                                        <li> <b>Paragraph Generator:</b>  Struggling with writer's block? Let our AI generate unique,
                                            coherent paragraphs on any topic you specify. Perfect for brainstorming, ideation,
                                            or adding content to your writing projects.
                                        </li>
                                        <br />
                                        <li><b>Chatbot:</b>Engage in human-like conversations with our intelligent chatbot.
                                            Ask questions, get answers, and explore ideas through interactive dialogue.
                                            Great for customer support, research, or just casual conversation.
                                        </li>
                                        <br />
                                        <li><b>JavaScript Code Generator:</b>Save time and effort by letting our AI write clean,
                                            functional JavaScript code for you. Simply describe what you want the code to do,
                                            and our tool will generate the necessary code snippets.
                                        </li>
                                    </ul>
                                </Typography>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Typography variant='h6' textAlign="left" 
                                    sx={{
                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                    }}>
                                    <ul>
                                        <li><b>Boost Productivity:</b>Automate repetitive tasks and free up time for more important work.</li><br />
                                        <li><b>Enhance Creativity:</b>Overcome creative blocks and generate fresh ideas with our AI-powered tools.</li><br />
                                        <li><b>Improve Efficiency:</b>Get tasks done faster and more accurately with our intelligent assistance.</li><br />
                                        <li><b>Personalize Content:</b>Tailor your content to specific audiences and preferences using our AI's advanced capabilities.</li><br />
                                    </ul>
                                </Typography>
                            </CustomTabPanel>
                        </Box>
                    </Item>
                    <Item sx={{ p: 4, boxShadow: 24 }}>
                        <Typography color="primary.main" variant='h4' mb="30px" fontWeight="bold"
                            sx={{
                                fontSize: { xs: '34px', sm: '32px', md: '40px' },
                            }}>
                            Get Started
                        </Typography>
                        <Typography variant='h6' textAlign="left"
                            sx={{
                                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                            }}>
                            Ready to experience the power of Toolligence? Sign Up to Toolligence now and start unlocking your full potential.
                            Whether you're a writer, developer, student, or professional, our AI tools are designed to help you succeed in the digital age.
                            <br /><br />
                            Join the AI revolution with <b>Toolligence</b> - the smart choice for your content creation needs.
                           </Typography>
                        <Button
                            color='success'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{
                                mt: 3,
                            }}
                            onClick={() => window.open("https://github.com/Abhinaba12/Toolligence", "_blank")}
                        >
                            Visit GitHub
                        </Button>
                    </Item>
                </Stack>
                <div style={{ textAlign: "center", marginBottom: "0", fontFamily: "bold"}}>&copy;Copyright: Abhinaba Roy- <a class="fade" target="_blank" rel="noopener noreferrer" href="#">All Rights Reserved</a></div>
            </Box>
        </Box>

    );
}
