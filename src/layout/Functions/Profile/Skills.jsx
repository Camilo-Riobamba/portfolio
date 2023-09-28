import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import {
    MouseParallaxChild,
    MouseParallaxContainer
} from 'react-parallax-mouse';

//layout images
import lk1 from '@assets/lk1.png';
import lk2 from '@assets/lk2.png';
import lk3 from '@assets/lk3.png';
// technologies
import htmlImage from '@assets/html.png';
import cssImage from '@assets/css.png';
import jsImage from '@assets/javascript.png';
import reactImage from '@assets/react.png';
import tsImage from '@assets/typescript.png';
import nodeImage from '@assets/node.png';
import gitImage from '@assets/git.png';
import sqlImage from '@assets/sql.png';
import mongoImage from '@assets/mongo.png';
import postgresImage from '@assets/postgres.png';

export default function Skills() {
    return (
        <Box
            component={MouseParallaxContainer}
            globalFactorX={1}
            globalFactorY={1}
            sx={{
                overflow: 'visible !important',

                my: { xs: 8, md: 16 },
                mx: { xs: 0, md: 8 },

                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 4, md: 16 }
            }}
        >
            <Box
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                sx={{
                    width: 'min-content',
                    flexGrow: 100,

                    mt: { xs: 0, md: 6 }
                }}
            >
                <Typography variant="h2" sx={{ ml: { xs: 4, md: 8 } }}>
                    Mis habilidades
                </Typography>
                <Paper
                    sx={{
                        mt: { xs: 2, md: 4 },

                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,

                        '& > .MuiPaper-root': {
                            flexGrow: 1,

                            backgroundColor: 'secondary.dark',
                            color: 'secondary.contrastText'
                        }
                    }}
                >
                    <Paper>
                        <Typography variant="body2">HTML</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">CSS</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">Javascript</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">Typescript</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">React</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">Node</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">MongoDB</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">SQL</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">Postgres</Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2">Git</Typography>
                    </Paper>
                </Paper>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', md: 'min-content' },
                    flexGrow: 1,

                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: { md: 6 },

                    '& > *': {
                        width: 'min-content',
                        flexGrow: 1
                    }
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                    sx={({ shadows }) => ({
                        minWidth: { xs: 325, md: 425 },
                        maxWidth: { xs: 400, md: 450 },

                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridTemplateRows: 'repeat(4, auto)',

                        gap: { xs: 0.5, md: 1 },

                        '& > .MuiBox-root': {
                            p: 1,

                            position: 'relative',

                            '& > img': {
                                width: '100%',
                                filter: `drop-shadow(${shadows[12]})`
                            },

                            '& .MuiPaper-root': {
                                p: { xs: 1.5, md: 2 },

                                aspectRatio: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                                position: 'absolute',
                                zIndex: 1,

                                borderRadius: 1000,
                                backgroundColor: '#171717',

                                '& img': {
                                    width: '100%',
                                    maxWidth: { xs: 35, md: 50 }
                                }
                            }
                        }
                    })}
                >
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.02}
                        factorY={0.02}
                        gridColumn="span 4"
                    >
                        <img src={lk1} />
                        <Paper sx={{ bottom: 0, left: 0 }}>
                            <img src={htmlImage} />
                        </Paper>
                    </Box>
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.04}
                        factorY={0.04}
                        gridColumn="span 4"
                    >
                        <img src={lk2} />
                        <Paper sx={{ top: 0, left: 0 }}>
                            <img src={cssImage} />
                        </Paper>
                    </Box>
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.02}
                        factorY={0.02}
                        gridColumn="span 4"
                    >
                        <img src={lk1} />
                        <Paper sx={{ bottom: 0, left: 0 }}>
                            <img src={jsImage} />
                        </Paper>
                    </Box>

                    <Box gridColumn="span 1" />
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.01}
                        factorY={0.03}
                        gridColumn="span 6"
                    >
                        <img src={lk3} />
                        <Paper sx={{ top: 0, left: 0 }}>
                            <img src={reactImage} />
                        </Paper>
                        <Paper sx={{ top: 0, right: 0 }}>
                            <img src={tsImage} />
                        </Paper>
                    </Box>
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.03}
                        factorY={0.02}
                        gridColumn="span 4"
                    >
                        <img src={lk1} />
                        <Paper sx={{ bottom: 0, left: 0 }}>
                            <img src={nodeImage} />
                        </Paper>
                    </Box>
                    <Box gridColumn="span 1" />

                    <Box
                        component={MouseParallaxChild}
                        factorX={0.03}
                        factorY={0.03}
                        gridColumn="span 6"
                    >
                        <img
                            src={lk3}
                            style={{ transform: 'rotate(180deg)' }}
                        />
                        <Paper sx={{ bottom: 0, left: 0 }}>
                            <img src={mongoImage} />
                        </Paper>
                        <Paper sx={{ bottom: 0, right: 0 }}>
                            <img src={sqlImage} />
                        </Paper>
                    </Box>
                    <Box
                        component={MouseParallaxChild}
                        factorX={0.04}
                        factorY={0.02}
                        gridColumn="span 6"
                    >
                        <img src={lk3} />
                        <Paper sx={{ top: 0, left: 0 }}>
                            <img src={postgresImage} />
                        </Paper>
                        <Paper sx={{ top: 0, right: 0 }}>
                            <img src={gitImage} />
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
