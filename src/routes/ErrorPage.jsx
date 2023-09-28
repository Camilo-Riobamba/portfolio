import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

export default function ErrorPage({ children }) {
    return (
        <Container>
            <Typography variant="h4">Error</Typography>
            {children && (
                <Typography variant="subtitle1">{children}</Typography>
            )}
            <Button variant="contained" color="primary" component={Link} to="/">
                Volver al inicio
            </Button>
        </Container>
    );
}
