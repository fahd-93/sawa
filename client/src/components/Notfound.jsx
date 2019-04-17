import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Notfound = () => (
    <div>
        <Container>
            <h2>
                404 - Ops
            </h2>
            <Link to="/">Go back home</Link>
        </Container>
    </div>
)
export default Notfound;