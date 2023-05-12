import React from 'react';
import { StoreType } from './redux/reduxStore';

const StoreContext = React.createContext({} as StoreType);

export default StoreContext;