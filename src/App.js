import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Rick and Morty</h1>
                <Table />
            </div>
        );
    }
}

export default App;