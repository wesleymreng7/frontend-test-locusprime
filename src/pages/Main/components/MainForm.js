import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const MainForm = (props) => {
    const dataRef = useRef();
    const [data, setData] = useState({
        username: '',
        data: ''
    });
    const handleChange = (input) => (e) => {
        setData({
            ...data,
            [input]: e.target.value
        })
    };
    const setMinDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        dataRef.current.setAttribute('min', today);
        dataRef.current.setAttribute('value', today);
    }
    useEffect(() => {
        setMinDate();
    }, []);
    const searchUser = () => {
        props.getUser(data.username, data.data);
        setTimeout(props.getUsers, 1000);
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Github User</Form.Label>
                <Form.Control type="text" placeholder="Usuário do github" onChange={handleChange('username')} value={data.username} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>Data</Form.Label>
                <Form.Control type="date" placeholder="Data" ref={dataRef} onChange={handleChange('data')} value={data.data} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={searchUser}>
                Adicionar
                        </Button>
            {props.error && <Alert variant="danger" className="mt-2">
                <p>Usuário Inexistente</p>
            </Alert>}
        </Form>
    );
}

export default MainForm;