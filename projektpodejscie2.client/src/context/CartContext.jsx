import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [components, setComponents] = useState([]);

    const addComponent = (component) => {
        setComponents([...components, component]);
    };

    return (
        <AppContext.Provider value={{ components, addComponent }}>
            {children}
        </AppContext.Provider>
    );
};