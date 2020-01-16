import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Creators } from '../../redux/actionCreators';
import { Container, Col, Row, Form, Button, Alert } from 'react-bootstrap';

const Signup = (props) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [isEmailValid, setValidateEmail] = useState(true);
    const [isPasswordValid, setValidatePassword] = useState(true);
    const handleChange = (input) => (e) => {
        setData({
            ...data,
            [input]: e.target.value
        })
    };
    const signUp = () => {
        if(data.password !== data.password2){
            setValidatePassword(false);
            return;
        }
        if(!validateEmail(data.email)) {
            setValidateEmail(false);
            return;
        }

        props.register({
            name: data.name,
            email: data.email,
            password: data.password
        })
        setData({
            name: '',
            email: '',
            password: '',
            password2: ''
        })
    }
    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs ></Col>
                <Col style={{ border: '1px solid #e6e6e6', padding: '30px', borderRadius: '10px'}}>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Nova Conta</h2>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" onChange={handleChange('name')} value={data.name}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" onChange={handleChange('email')} value={data.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"  placeholder="Digite sua senha" onChange={handleChange('password')} value={data.password} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Verificar Senha</Form.Label>
                            <Form.Control type="password" placeholder="Repita sua senha" onChange={handleChange('password2')} value={data.password2} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={signUp}>
                            Cadastrar
                        </Button>
                        {props.auth.saved && <Alert variant="success" className="mt-2">
                            <p>Usuário registrado com sucesso</p>
                        </Alert>}
                        {!isEmailValid && !props.auth.saved && <Alert variant="danger" className="mt-2">
                            <p>E-mail Inválido</p>
                        </Alert>}
                        {!isPasswordValid && !props.auth.saved && <Alert variant="danger" className="mt-2">
                            <p>Senhas não correspondem</p>
                        </Alert>}
                    </Form>
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
        register: (user) => dispatch(Creators.createProfileRequest(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);