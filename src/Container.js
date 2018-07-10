import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { changePage, setResults, setInfo } from './redux/actionCreators';
import Table from './Table';

class Container extends Component {
    componentDidMount() {
        this.callApi(1);
    };
    prevPage() {
        if (this.props.info.prev) {
            let page = this.props.handlePageChange(this.props.page - 1);
            this.callApi(page);
        }
    };
    nextPage() {
        if (this.props.info.next) {
            let page = this.props.handlePageChange(this.props.page + 1);
            this.callApi(page);
        }
    };
    callApi(page) {
        axios
        .get('https://rickandmortyapi.com/api/character', { 
            params: { 
                page: page
            }
        })
        .then((response) => {
            this.props.handleResultsChange(response.data.results);
            this.props.handleInfoChange(response.data.info);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    render() {
        return(
                <div className="container">
                    <Link to="/"><h1>Rick and Morty</h1></Link>
                    <Switch>
                        <Route exact path="/" component={(props) => 
                            <Table results={this.props.results} 
                            prevPage={this.prevPage.bind(this)}
                            nextPage={this.nextPage.bind(this)} 
                            page={this.props.page} /> 
                        } 
                        />  
                        <Route default component={(props) => 
                            <Table results={this.props.results} 
                            prevPage={this.prevPage.bind(this)}
                            nextPage={this.nextPage.bind(this)} 
                            page={this.props.page} /> 
                        } 
                        /> 
                    </Switch>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.results,
    info: state.info,
    page: state.page
})
const mapDispatchToProps = (dispatch) => ({
    handleResultsChange(results) {
        dispatch(setResults(results));
    },
    handleInfoChange(info) {
        dispatch(setInfo(info));
    },
    handlePageChange(page) {
        dispatch(changePage(page));
        return page;
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Container);