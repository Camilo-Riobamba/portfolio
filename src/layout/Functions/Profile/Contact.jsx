import { Box, Button, Paper, Typography } from '@mui/material';

import { EmailRounded, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <Box
            sx={{
                my: { xs: 8, md: 16 },
                mx: { xs: 0, md: 12 },

                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 8 },

                '& > .MuiBox-root': {
                    width: 'min-content'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'unset' },
                    gap: 2,

                    '& > .MuiPaper-root': {
                        px: 4,

                        textAlign: 'center',

                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText'
                    }
                }}
            >
                <Paper
                    component={motion.div}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                >
                    <EmailRounded fontSize="large" />
                    <Typography variant="h4">Email</Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        camilo.riobamba@gmail.com
                    </Typography>
                    <Button
                        href="mailto:camilo.riobamba@gmail.com"
                        target="_blank"
                        variant="outlined"
                        sx={{ mt: 1 }}
                    >
                        Escríbeme
                    </Button>
                </Paper>
                <Paper
                    component={motion.div}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                >
                    <WhatsApp fontSize="large" />
                    <Typography variant="h4">Whatsapp</Typography>

                    <Typography
                        variant="body1"
                        whiteSpace="nowrap"
                        sx={{ mt: 2 }}
                    >
                        <strong>+57</strong> 3127799500
                    </Typography>
                    <Button
                        href="https://wa.me/573127799500"
                        target="_blank"
                        variant="outlined"
                        sx={{ mt: 1 }}
                    >
                        Escríbeme
                    </Button>
                </Paper>
            </Box>

            {/* <Box
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                sx={{ mt: { md: 4 }, flexGrow: 1 }}
            >
                options
            </Box> */}
        </Box>
    );
}
