import { Link } from 'react-router-dom';

export default function Unauthorized() {
    return (
        <>
            no autorizado
            <Link to="/">volver al inicio</Link>
        </>
    );
}
