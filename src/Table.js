import React, { Component } from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const StyledTable = styled.table`
    border: 1px solid black;
    width: 100%;
`;

const Table = (props) => (
    <div className="results">
        <h2>Page {props.page}</h2>
        <button onClick={props.prevPage}>
             Previous Page
         </button>
        <button onClick={props.nextPage}>
            Next Page
        </button>
        <StyledTable>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map((result) => {
                return (
                        <TableRow key={result.id} {...result}/>
                )
            })
            }
            </tbody>
        </StyledTable>
    </div>
)

export default Table;