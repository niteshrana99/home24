import React, { useReducer } from "react";
import { combineReducers } from "./context.utils";
import { productsReducer, productsState } from "./reducers/products.reducer";
import { initialUserState, userReducer } from "./reducers/user.reducer";


export const initialState = {
    appState:productsState,
    userState:initialUserState
}

export const AppContext = React.createContext<{ state: typeof initialState; dispatch: React.Dispatch<any>; } | null>(null);

const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [state, dispatch] =  useReducer(combineReducers({
        appState:productsReducer,
        userState: userReducer
    }), initialState);

    
    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
};

export default ContextProvider;
