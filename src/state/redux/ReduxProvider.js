import React from 'react';
import { Provider } from 'react-redux';
import configureAppStore from './store';
const store = configureAppStore();
const ReduxProvider = ({ children }) => {
    return React.createElement(Provider, { store: store }, children);
};
export default ReduxProvider;
