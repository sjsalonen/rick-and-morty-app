import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            results: {},
            info: {},
            errorMessage: '',
            page: 1
        };
      }
    componentDidMount() {
        callApi();
    };
    callApi() {
        axios
        .get('https://rickandmortyapi.com/api/character', { 
            params: { 
                page: this.state.page
            }
        })
        .then((response) => {
            console.log(response);
            this.setState({response: response.data.results});
            this.setState({info: response.data.info});
            this.setState({hideLoader: 'hidden'});
        })
        .catch((error) => {
            console.log(error);
            this.setState({errorMessage: 'API error, please try again later'});
        });
    };
    render() {
        return(
            <table>
            </table>
        );
    }
}

export default Table;