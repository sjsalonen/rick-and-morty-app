import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
    display: flex;
    cursor: pointer;
`;

const TableRow = (props) => (
    <tr>
        <td><Image src={props.image} alt={props.name} /></td>
        <td>{props.name}</td>
        <td>{props.species}</td>
        <td>{props.status}</td>
    </tr>
);

export default TableRow;