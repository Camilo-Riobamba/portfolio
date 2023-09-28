import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';

export default function HeaderBar() {
    return (
        <Box
            sx={({ palette }) => ({
                py: 2,
                px: {
                    xs: 2,
                    md: 3
                },

                position: 'sticky',
                top: 0,
                left: 0,
                zIndex: 10,

                display: 'flex',
                alignItems: 'center',

                backgroundColor: palette.background.default
            })}
        >
            <Box sx={{ position: 'relative' }}>
                <Paper
                    sx={({ shadows }) => ({
                        aspectRatio: 1,

                        display: 'flex',
                        alignItems: 'center',

                        backgroundColor: 'secondary.dark',
                        color: 'secondary.contrastText',
                        borderRadius: 1000,
                        cursor: 'pointer',

                        transition: 'transform 0.4s ease-in-out',

                        '&:hover': {
                            boxShadow: shadows[1],
                            transform: 'rotate(360deg)'
                        },

                        '& > .MuiTypography-root': {
                            transition: 'opacity 0.4s ease-in-out'
                        },

                        '&:hover > .MuiTypography-root': {
                            opacity: 0.25
                        },

                        '& + .MuiPaper-root': {
                            width: 0,
                            px: 0,
                            transition: 'width 0.4s ease, padding 0.4s ease'
                        },

                        '&:hover + .MuiPaper-root': {
                            width: 225,
                            pl: '75%',
                            pr: 2
                        }
                    })}
                >
                    <Typography variant="h4">CR</Typography>
                </Paper>

                <Paper
                    sx={{
                        zIndex: -1,
                        overflow: 'hidden',

                        position: 'absolute',
                        top: 6,
                        left: '50%',
                        bottom: 6,

                        display: 'flex',
                        alignItems: 'center',

                        backgroundColor: 'secondary.dark',
                        color: 'secondary.contrastText'
                    }}
                >
                    <Typography variant="h4" whiteSpace="nowrap">
                        Camilo Riobamba
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box
                sx={{
                    display: 'flex',

                    '& .MuiIconButton-root': {
                        aspectRatio: 1,

                        '& .MuiLink-root': {
                            display: 'block'
                        }
                    }
                }}
            >
                <IconButton
                    href="https://www.linkedin.com/in/camilo-r-4388b6120/"
                    target="_blank"
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    href="https://github.com/Camilo-Riobamba"
                    target="_blank"
                >
                    <GitHub />
                </IconButton>
            </Box>
        </Box>
    );
}
