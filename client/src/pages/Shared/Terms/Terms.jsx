/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nisi quas consequatur sapiente officia? Ullam quas consectetur, quae expedita officia molestias maiores sed commodi laboriosam, voluptatibus facilis voluptates. Explicabo veniam laboriosam provident consectetur alias necessitatibus inventore et. Asperiores, minima? Molestiae placeat ratione praesentium recusandae. Nihil repudiandae alias eligendi eaque at!</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;