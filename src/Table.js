import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setPage, setErrorMessage, setResults, setInfo } from './redux/actionCreators';
import TableRow from './TableRow';

class Table extends Component {
    page: 1;
    errorMessage: '';
    componentDidMount() {
        this.callApi();
    };
    callApi() {
        axios
        .get('https://rickandmortyapi.com/api/character', { 
            params: { 
                page: this.page
            }
        })
        .then((response) => {
            console.log(response);
            this.props.handleResultsChange(response.data.results);
            this.props.handleInfoChange(response.data.info);
        })
        .catch((error) => {
            console.log(error);
            this.errorMessage = 'API Error';
        });
    };
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.results.map((result) => {
                    return (
                        <TableRow key={result.id} {...result}/>
                    )
                })
                }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.results,
    info: state.info  
})
const mapDispatchToProps = (dispatch) => ({
    handleResultsChange(results) {
        dispatch(setResults(results));
    },
    handleInfoChange(info) {
        dispatch(setInfo(info));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);