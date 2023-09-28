import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { DownloadRounded, MoreHorizRounded } from '@mui/icons-material';

import headerImage from '@assets/fondo1.png';
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from 'react-parallax-mouse';

export default function Hero() {
    return (
        <Box
            component={MouseParallaxContainer}
            sx={{
                overflow: 'visible !important',

                mt: { xs: 8, md: 12 },
                mb: { xs: 8, md: 16 },

                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 4
            }}
        >
            <Box
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                sx={{
                    width: {
                        xs: 'max-content',
                        md: 'min-content'
                    },
                    maxWidth: {
                        xs: '100%',
                        md: '50%'
                    },
                    flexGrow: 1,
                    order: { xs: 1, md: 'unset' },

                    mt: { md: 8 },
                    mr: 8
                }}
            >
                <Typography variant="h1">
                    Desarrollador de aplicaciones web
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2, ml: 2 }}>
                    La programación es cómo un lienzo en blanco en donde puedo
                    dar vida a mis ideas y crear soluciones únicas.
                </Typography>

                <Button
                    href="https://drive.google.com/file/d/1PDA6BoaUaySTq0xgiZSFxYWoGz7timrY/view?usp=sharing"
                    target="_blank"
                    variant="outlined"
                    sx={{ mt: 4, ml: 2 }}
                >
                    <DownloadRounded />
                    Hoja de vida
                </Button>
            </Box>

            <Box
                component={motion.div}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                sx={{
                    width: 'min-content',
                    flexGrow: 1,

                    display: 'flex',
                    gap: 1
                }}
            >
                <Box
                    sx={{
                        zIndex: 1,

                        mt: 4,

                        flexGrow: 3,
                        alignSelf: 'flex-start'
                    }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.03}
                        factorY={0.02}
                        elevation={12}
                        sx={{
                            height: '100px'
                        }}
                    />
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.01}
                        factorY={0.01}
                        elevation={12}
                        sx={{
                            mt: 1,
                            mr: -4,
                            height: '50px',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <IconButton>
                            <MoreHorizRounded fontSize="large" />
                        </IconButton>
                    </Paper>
                </Box>

                <Box
                    component={MouseParallaxChild}
                    factorX={0.02}
                    factorY={0.03}
                    sx={{ width: '70%' }}
                >
                    <Paper
                        elevation={12}
                        component="img"
                        src={headerImage}
                        sx={{
                            width: '100%',

                            p: 0,

                            aspectRatio: 1,
                            overflow: 'hidden'
                        }}
                    />
                </Box>

                <Paper
                    component={MouseParallaxChild}
                    factorX={0.02}
                    factorY={0.01}
                    elevation={12}
                    sx={{
                        mb: 6,

                        flexGrow: 2,
                        height: '200px',
                        alignSelf: 'flex-end'
                    }}
                />
            </Box>
        </Box>
    );
}
