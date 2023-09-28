import { CopyrightRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            sx={{
                p: 4,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,

                backgroundColor: 'secondary.main'
            }}
        >
            <CopyrightRounded fontSize="small" />
            <Typography variant="body2">
                Camilo Riobamba. Todos los derechos reservados.
            </Typography>
        </Box>
    );
}
