import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const Header = (props) => {
    if(!props.auth) {
        return <Redirect to="/login" />
    }
    return (
        <Nav className="justify-content-end align-items-center" variant="pills">
            <Nav.Item className="mr-2">
                {props.user && props.user.name}
            </Nav.Item>
            <Nav.Item>
                <Button variant="outline-secondary" onClick={props.logout}>
                    Sair
                </Button>
            </Nav.Item>
        </Nav>
    )
}

export default Header;