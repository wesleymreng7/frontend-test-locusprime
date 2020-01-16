import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Creators } from '../../redux/actionCreators';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import ListRepos from './components/ListRepos';

const SingleUser = (props) => {
    useEffect(() => {
        props.getUser(props.match.params.name);
        props.getRepos(props.match.params.name);
    }, []);
    
    return (
        <Container>
            <Header logout={props.logout} auth={props.auth.isAuth} user={props.auth.user} />
            <Row className="justify-content-md-center mt-5">
                <Col style={{ border: '1px solid #e6e6e6', padding: '30px', borderRadius: '10px' }}>
                    <div>
                        {Object.keys(props.gitUsers.user).length > 0 && <Row>
                            <Col lg={2}>
                                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={props.gitUsers.user.avatar_url} />
                            </Col>
                            <Col lg={10}>
                                <Row>{props.gitUsers.user.name}</Row>
                                <Row>Quantidade de Repositórios: {props.gitUsers.user.public_repos}</Row>
                                <Row>{props.gitUsers.user.data}</Row>
                            </Col>
                        </Row>}
                    </div>
                    <ListRepos repos={props.gitUsers.repos} />
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
        getUser: (username) => dispatch(Creators.getUserRequest(username)),
        getRepos: (username) => dispatch(Creators.getReposRequest(username)),
        logout: () => dispatch(Creators.destroyAuthRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);