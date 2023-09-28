import { Container } from '@mui/material';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Profile() {
    return (
        <Container sx={{ overflowX: 'hidden' }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Container>
    );
}
