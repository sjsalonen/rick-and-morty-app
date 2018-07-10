import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { changePage, setResults, setInfo } from './redux/actionCreators';
import TableRow from './TableRow';

class Table extends Component {
    componentDidMount() {
        this.callApi(1);
    };
    prevPage() {
        if (this.props.page > 1) {
            let page = this.props.handlePageChange(this.props.page - 1);
            this.callApi(page);
        }
    };
    nextPage() {
        let page = this.props.handlePageChange(this.props.page + 1);
        this.callApi(page);
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
        let hidePrevious = "";
        let hideNext = "";
        return(
            <div className="results">
                <h2>Page {this.props.page}</h2>
                <button onClick={this.prevPage.bind(this)}>
                    Previous Page
                </button>
                <button onClick={this.nextPage.bind(this)}>
                    Next Page
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);