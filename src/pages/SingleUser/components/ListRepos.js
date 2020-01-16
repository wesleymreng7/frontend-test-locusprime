import React from 'react';
import { Table } from 'react-bootstrap';

const ListRepos = (props) => {

    const renderRepos = (repo) => {
        return (
            <tr key={repo.id}>
                <td>{repo.id}</td>
                <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
            </tr>
        )
    }
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Repositório</th>
                </tr>
            </thead>
            <tbody>
                {props.repos.length > 0 && props.repos.map(renderRepos)}
            </tbody>
        </Table>
    );
}

export default ListRepos;