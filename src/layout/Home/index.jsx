import { Box } from '@mui/material';

import HeaderBar from './HeaderBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: 1
            }}
        >
            <HeaderBar />

            <Outlet />

            <Footer />
        </Box>
    );
}
