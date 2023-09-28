import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import academlo from '@assets/academlo.jpg';
import upb from '@assets/upb.png';
import udenar from '@assets/udenar.png';

export default function About() {
    return (
        <Box
            sx={{
                my: { xs: 8, md: 16 },
                mx: { xs: 0, md: 4 },

                display: 'flex',
                flexWrap: 'wrap',
                gap: {
                    xs: 4,
                    md: 12
                }
            }}
        >
            <Box
                component={motion.div}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                sx={{
                    mt: { md: 2 },

                    width: 'min-content',
                    flexGrow: 100,
                    order: {
                        md: 1
                    }
                }}
            >
                <Typography variant="h2">Acerca de mi</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Desde joven, me adentré en la programación, enfocándome en
                    el desarrollo front-end con React y el back-end utilizando
                    Node.js, MongoDB y PostgreSQL. Mi experiencia ha fortalecido
                    mi lógica y resolución de problemas, incluso bajo presión.
                </Typography>
                <Paper
                    sx={{
                        mt: { xs: 4, md: 6 },
                        ml: { xs: 0, md: 4 }
                    }}
                >
                    <Typography variant="h3">Además...</Typography>
                    <Paper
                        sx={{
                            mt: 2,

                            backgroundColor: 'secondary.dark',
                            color: 'secondary.contrastText'
                        }}
                    >
                        <Typography variant="body1">
                            Mi formación en física mejora mi habilidad de
                            razonamiento lógico y esto a la vez me permite
                            ofrecer soluciones más eficaces y abordar desafíos
                            desde una perspectiva única.
                        </Typography>
                    </Paper>
                </Paper>
            </Box>

            <Box
                sx={{
                    minWidth: 'min-content',
                    flexGrow: 1,

                    p: { xs: 2, md: 0 }
                }}
            >
                <Paper
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    sx={{
                        '& > .MuiBox-root': {
                            mt: 2,

                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 1,

                            '& > .MuiPaper-root': {
                                flexGrow: 1,

                                backgroundColor: 'secondary.dark',
                                color: 'secondary.contrastText'
                            }
                        }
                    }}
                >
                    <Typography variant="h3">Experiencia</Typography>

                    <Box>
                        <Paper>
                            <Typography variant="body2">2 años</Typography>
                        </Paper>
                        <Paper>
                            <Typography variant="body2">Wordpress</Typography>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper>
                            <Typography variant="body2">1 año</Typography>
                        </Paper>
                        <Paper>
                            <Typography variant="body2">
                                Desarrollador full-stack
                            </Typography>
                        </Paper>
                    </Box>
                </Paper>

                <Paper
                    component={motion.div}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                    sx={{
                        mt: 2
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,

                            '& > .MuiPaper-root': {
                                aspectRatio: 1,

                                display: 'flex',
                                alignItems: 'center',

                                '& img': { width: 50 },

                                backgroundColor: 'white'
                            }
                        }}
                    >
                        <Paper>
                            <img src={academlo} />
                        </Paper>

                        <Paper>
                            <img src={upb} />
                        </Paper>

                        <Paper>
                            <img src={udenar} />
                        </Paper>
                    </Box>
                    <Paper
                        sx={{
                            width: '100%',
                            mt: 2,
                            ml: -4,
                            backgroundColor: 'secondary.dark',
                            color: 'secondary.contrastText'
                        }}
                    >
                        <Typography variant="h3">Estudios</Typography>
                    </Paper>
                </Paper>
            </Box>
        </Box>
    );
}
