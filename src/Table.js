import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    state = {
        data: {},
        meta: {},
        hideLoader: '',
        page: 1,
        errorMessage: ''
    },
    api_url: 'https://rickandmortyapi.com/api/character/',
    componentDidMount() {
        axios
        .get('https://rickandmortyapi.com/api/character/?page=1')
        .then((response) => {
            this.setState({data: response.results});
            this.setState({meta: response.info});
            this.setState({hideLoader: 'hidden'});
        });
        .catch(function (error) {
            console.log(error);
            this.setState({hideLoader: 'hidden'});
            this.setState({errorMessage: 'API error, please try again later'});
        });
    }
    callApi() {
        axios.get(this.api_url, {
            params: {
                page: this.state.page
            }
        })
    }
    render() {
        return(
            <table>
            </table>
        );
    }
}