import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Foot from './Foot';
import { Container } from 'react-bootstrap';


const Notfound = () => (
    <div>
        <NavigationBar />
        <Container>
            <h2>
                404 - Ops
            </h2>
            <Link to="/">Go back home</Link>
        </Container>
        <Foot />
    </div>
)
export default Notfound;