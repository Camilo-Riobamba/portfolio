import { Container, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
    const error = useRouteError();

    return (
        <Container>
            <Typography variant="h1">{error.status}</Typography>
            <Typography variant="body1">{error.statusText}</Typography>
        </Container>
    );
}
