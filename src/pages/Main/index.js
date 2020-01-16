import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Creators } from '../../redux/actionCreators';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import MainForm from './components/MainForm';
import ListUsers from './components/ListUsers';
const Main = (props) => {
    useEffect(() => {
        props.getUsers();
    }, []);
    return (
        <Container>
            <Header user={props.auth.user} logout={props.logout} auth={props.auth.isAuth} />
            <Row className="justify-content-md-center mt-5">
                <Col style={{ border: '1px solid #e6e6e6', padding: '30px', borderRadius: '10px' }}>
                    <MainForm getUser={props.getUser} getUsers={props.getUsers} error={props.gitUsers.error} />
                    <ListUsers data={props.gitUsers.data} />
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        gitUsers: state.gitUsers,
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (username, data) => dispatch(Creators.getGitUserRequest(username, data)),
        getUsers: () => dispatch(Creators.getUsersRequest()),
        logout: () => dispatch(Creators.destroyAuthRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);