import { Box, Link, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import {
    MouseParallaxContainer,
    MouseParallaxChild
} from 'react-parallax-mouse';

import ecommerceProject from '@assets/ecommerce-project.png';
import pokedexProject from '@assets/pokedex-project.png';
import dimensionProject from '@assets/dimension-project.png';
import apiProject from '@assets/api-project.png';
import webAppProject from '@assets/web-app-project.png';

export default function Projects() {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring' }}
        >
            <Box
                component={MouseParallaxContainer}
                sx={{
                    overflow: 'visible !important',

                    my: { xs: 8, md: 16 },

                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: 'repeat(9, 1fr)',
                    gap: 2,

                    '& > .MuiPaper-root': {
                        position: 'relative',
                        overflow: 'hidden',

                        p: 0,

                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',

                        '& > .MuiLink-root': {
                            display: 'block',
                            height: '200%'
                        },

                        '& > .MuiPaper-root': {
                            p: 4,
                            m: 2,

                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,

                            transition: 'margin 0.5s ease'
                        },
                        '&:hover > .MuiPaper-root': {
                            mt: '-50%'
                        }
                    }
                }}
            >
                <Typography
                    component={motion.div}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                    variant="h2"
                    sx={{ mb: 4, ml: { md: 4 } }}
                    gridColumn="span 12"
                >
                    Mis trabajos
                </Typography>

                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 5' }}
                    gridRow="span 4"
                    sx={{ backgroundImage: `url('${ecommerceProject}')` }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.02}
                        factorY={0.01}
                    >
                        <Typography variant="h3">Ecommerce</Typography>
                        <Typography variant="body1">
                            Este proyecto consiste en una simulación de un
                            comercio electrónico en la que se presentan
                            únicamente las funcionalidades esenciales.
                        </Typography>
                    </Paper>
                    <Link
                        href="https://jovial-peony-c4f30d.netlify.app/"
                        target="_blank"
                    />
                </Paper>

                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 7' }}
                    gridRow="span 2"
                    sx={{ backgroundImage: `url('${apiProject}')` }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.01}
                        factorY={0.02}
                    >
                        <Typography variant="h3">API</Typography>
                        <Typography variant="body1">
                            Un ejemplo básico de una API y sus operaciones
                            básicas (CRUD).
                        </Typography>
                    </Paper>
                    <Link
                        href="https://crud-app-nk7g-dev.fl0.io/todos"
                        target="_blank"
                    />
                </Paper>
                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 7' }}
                    gridRow="span 2"
                    sx={{ backgroundImage: `url('${pokedexProject}')` }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.03}
                        factorY={0.01}
                    >
                        <Typography variant="h3">Pokedex</Typography>
                        <Typography variant="body1">
                            En este proyecto se demuestra el uso de una API con
                            una estructura de proyecto escalable.
                        </Typography>
                    </Paper>
                    <Link
                        href="https://neon-khapse-d09238.netlify.app/"
                        target="_blank"
                    />
                </Paper>
                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 6' }}
                    gridRow="span 2"
                    sx={{ backgroundImage: `url('${dimensionProject}')` }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.01}
                        factorY={0.02}
                    >
                        <Typography variant="h3">Rick and Morty</Typography>
                        <Typography variant="body1">
                            Aquí se presenta el uso de una API con una interfaz
                            de usuario intuitiva y un proyecto debidamente
                            estructurado.
                        </Typography>
                    </Paper>
                    <Link
                        href="https://zesty-medovik-f28b5e.netlify.app/"
                        target="_blank"
                    />
                </Paper>
                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 6' }}
                    gridRow="span 5"
                    sx={{ backgroundImage: `url('${webAppProject}')` }}
                >
                    <Paper
                        component={MouseParallaxChild}
                        factorX={0.01}
                        factorY={0.03}
                    >
                        <Typography variant="h3">Aplicacion web</Typography>
                        <Typography variant="body1">
                            Esta es una aplicación web diseñada para la
                            automatización de procesos dentro de una empresa.
                        </Typography>
                    </Paper>
                    <Typography
                        variant="h4"
                        color={'GrayText'}
                        sx={{ mt: 2, mx: 4 }}
                    >
                        En desarrollo...
                    </Typography>
                </Paper>
                <Paper
                    component={Box}
                    gridColumn={{ xs: 'span 12', md: 'span 6' }}
                    gridRow="span 3"
                >
                    {/* <Paper
                        component={MouseParallaxChild}
                        factorX={0.03}
                        factorY={0.02}
                    >
                        <Typography variant="h3">Aplicacion web</Typography>
                        <Typography variant="body1">
                            Esta es una aplicación web diseñada para la
                            automatización de procesos dentro de una empresa.
                        </Typography>
                    </Paper> */}
                    <Typography
                        variant="h4"
                        color={'GrayText'}
                        sx={{ mt: 2, mx: 4 }}
                    >
                        En desarrollo...
                    </Typography>
                </Paper>
            </Box>
        </motion.div>
    );
}
