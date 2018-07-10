import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Table from './Table';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <h1>Rick and Morty</h1>
                    <Table />
                </div>
            </Provider>
        );
    }
}

export default App;