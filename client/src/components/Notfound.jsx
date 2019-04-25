import React from 'react';
import { Jumbotron, Button, } from 'react-bootstrap';


const Notfound = () => (

    <Jumbotron rounded>
        <h1 className="text-center mt-3">Ops...</h1>
        <h4 className="text-center mt-5">404 - PAGE NOT FOUND</h4>
        <p className="text-center mt-5">The page you are looking for might have been removed, <br />had its name changed or is temporarily unavailable</p>
        <div className="text-center">
        <Button href="/" variant="outline-success" className="mx-auto mt-5">Go back home</Button>
        </div>
    </Jumbotron>
)
export default Notfound;