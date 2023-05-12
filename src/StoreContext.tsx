import React from 'react';
import { StoreType } from './redux/reduxStore';

const StoreContext = React.createContext({} as StoreType);

type ProviderType = {
    store: StoreType
    children: any
}

export const Provider = ({ store, children }: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;