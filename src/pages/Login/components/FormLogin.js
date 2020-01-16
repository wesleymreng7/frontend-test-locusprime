import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const FormLogin = (props) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (input) => (e) => {
        setData({
            ...data,
            [input]: e.target.value
        })
    };
    const signin = () => {
        props.login(data.email,data.password)
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" onChange={handleChange('email')} value={data.email} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={handleChange('password')} value={data.password} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={signin}>
                Entrar
                        </Button>
            {props.error && <Alert variant="danger" className="mt-2">
                <p>Usuário ou senha Inválidos</p>
            </Alert>}
        </Form>
    )
}
export default FormLogin;