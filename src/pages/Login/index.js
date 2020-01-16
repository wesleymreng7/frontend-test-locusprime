import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Creators } from '../../redux/actionCreators';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import FormLogin from './components/FormLogin';

const Login = (props) => {
    if(props.auth.isAuth) {
        return <Redirect to="/" />
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs ></Col>
                <Col style={{ border: '1px solid #e6e6e6', padding: '30px', borderRadius: '10px'}}>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Acesso ao Sistema</h2>
                    </div>
                    <FormLogin error={props.auth.error} login={props.login} />
                    <Link to="/create-account"><Button variant="outline-primary" className="mt-4">Inscreva-se</Button></Link>
                </Col>
                <Col xs ></Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(Creators.signinRequest(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);