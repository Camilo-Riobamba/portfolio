import PropTypes from 'prop-types';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { grey } from '@mui/material/colors';

export default function Theme({ children }) {
    return (
        <ThemeProvider
            theme={responsiveFontSizes(
                createTheme({
                    palette: {
                        mode: 'dark',

                        primary: {
                            main: '#fff',
                            contrastText: '#000'
                        },

                        secondary: {
                            main: '#272a33',
                            contrastText: '#fff'
                        },

                        background: {
                            default: '#141518',
                            paper: '#272a33'
                        }
                    },

                    typography: {
                        fontFamily: ['Lato', 'sans-serif'].join(','),

                        body1: {
                            color: '#d3d3d3'
                        },

                        h1: {
                            color: '#fff',
                            fontSize: '3.25rem',
                            fontFamily: 'Poppins',
                            fontWeight: 800
                        },
                        h2: {
                            color: '#fff',
                            fontSize: '2.25rem',
                            fontFamily: 'Poppins',
                            fontWeight: 800
                        },
                        h3: {
                            color: '#fff',
                            fontSize: '1.5rem',
                            fontFamily: 'Poppins',
                            fontWeight: 600
                        },
                        h4: {
                            fontSize: '1rem',
                            fontFamily: 'Poppins',
                            fontWeight: 600
                        },
                        h5: {
                            fontSize: '1rem',
                            fontFamily: 'Poppins',
                            fontWeight: 600
                        },
                        h6: {
                            fontSize: '1rem',
                            fontFamily: 'Poppins',
                            fontWeight: 600
                        },

                        button: { fontSize: '1rem', fontFamily: 'Poppins' }
                    },

                    shape: {
                        borderRadius: 10
                    },

                    shadows: [
                        'none',
                        'rgba(100, 115, 140, 0.2) 0px 2px 3px',
                        'rgba(100, 115, 140, 0.2) 0px 3px 6px',
                        'rgba(100, 115, 140, 0.2) 0px 4px 9px',
                        'rgba(100, 115, 140, 0.2) 0px 5px 12px',
                        'rgba(100, 115, 140, 0.2) 0px 6px 15px',
                        'rgba(100, 115, 140, 0.2) 0px 7px 18px',
                        'rgba(100, 115, 140, 0.2) 0px 8px 21px',
                        'rgba(100, 115, 140, 0.2) 0px 9px 24px',
                        'rgba(100, 115, 140, 0.2) 0px 10px 27px',
                        'rgba(100, 115, 140, 0.2) 0px 11px 30px',
                        'rgba(100, 115, 140, 0.2) 0px 12px 33px',
                        'rgba(100, 115, 140, 0.2) 0px 13px 36px',
                        'rgba(100, 115, 140, 0.2) 0px 14px 39px',
                        'rgba(100, 115, 140, 0.2) 0px 15px 42px',
                        'rgba(100, 115, 140, 0.2) 0px 16px 45px',
                        'rgba(100, 115, 140, 0.2) 0px 17px 48px',
                        'rgba(100, 115, 140, 0.2) 0px 18px 51px',
                        'rgba(100, 115, 140, 0.2) 0px 19px 54px',
                        'rgba(100, 115, 140, 0.2) 0px 20px 60px',
                        'rgba(100, 115, 140, 0.2) 0px 22px 66px',
                        'rgba(100, 115, 140, 0.4) 0px 24px 72px',
                        'rgba(100, 115, 140, 0.4) 0px 26px 78px',
                        'rgba(100, 115, 140, 0.6) 0px 28px 84px',
                        'rgba(100, 115, 140, 0.6) 0px 30px 90px'
                    ],

                    components: {
                        MuiPaper: {
                            styleOverrides: {
                                root: ({ theme }) => ({
                                    padding: theme.spacing(2)
                                })
                            },

                            defaultProps: {
                                elevation: 8
                            }
                        },

                        MuiButton: {
                            styleOverrides: {
                                root: ({ theme }) => ({
                                    textTransform: 'none',
                                    boxShadow: theme.shadows[4]
                                })
                            }
                        },

                        MuiFilledInput: {
                            defaultProps: {
                                disableUnderline: true
                            },

                            styleOverrides: {
                                root: {
                                    borderRadius: '10px',
                                    border: `2px solid ${grey[300]}40`,
                                    backgroundColor: grey[300] + '40',
                                    '&:hover': {
                                        backgroundColor: grey[400] + '40'
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: grey[200] + '40'
                                    }
                                },

                                error: ({ theme }) => ({
                                    border: `2px solid ${theme.palette.error.light}60`,
                                    backgroundColor:
                                        theme.palette.error.light + '30',

                                    '&:hover': {
                                        backgroundColor:
                                            theme.palette.error.light + '30'
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor:
                                            theme.palette.error.light + '30'
                                    }
                                })
                            }
                        }
                    }
                })
            )}
        >
            <CssBaseline />

            {children}
        </ThemeProvider>
    );
}

Theme.propTypes = {
    children: PropTypes.node.isRequired
};
