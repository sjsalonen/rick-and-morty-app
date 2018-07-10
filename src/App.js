import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Table from './Table';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="app">
                        <h1>Rick and Morty</h1>
                        <Route exact path="/" component={Table} />
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;