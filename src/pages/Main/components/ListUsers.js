import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListUsers = (props) => {
    const renderUser = (user) => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td><Link to={"user/" + user.login}><img src={user.avatar_url} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></Link></td>
                <td><Link to={"user/" + user.login}>{user.name}</Link></td>
                <td><Link to={"user/" + user.login}>{user.login}</Link></td>
                <td>{user.public_repos}</td>
                <td>{user.data}</td>
            </tr>
        );
    }
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Avatar</th>
                    <th>Nome</th>
                    <th>Login</th>
                    <th>Qtd Repositórios</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {props.data.length > 0 && props.data.map(renderUser)}
            </tbody>
        </Table>
    )
}

export default ListUsers;