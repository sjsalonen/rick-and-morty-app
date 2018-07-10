import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from './Container';

const App = () => (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">
                    <Container />
                </div>
            </Provider>
        </BrowserRouter>
)

export default App;