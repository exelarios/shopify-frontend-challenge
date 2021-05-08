import { createContext, useReducer } from "react";

const NominateContext = createContext();

const initialState = {
    nominees: []
};

const actions = {
    ADD_NOMINEE: "ADD_NOMINEE",
    REMOVE_NOMINEE: "REMOVE_NOMINEE"
};

function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_NOMINEE:
            if (state.nominees.some(item => item.id === action.value.id)) {
                return state;
            }
            return {
                ...state,
                nominees: [...state.nominees, action.value]
            }
        case actions.REMOVE_NOMINEE:
            return {
                ...state,
                nominees: state.nominees.filter(item => item.id !== action.value.id)
            }
        default:
            return state;
    }
}

function NominateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        nominees: state.nominees,
        addNominee: value => {
            dispatch({ type: actions.ADD_NOMINEE, value});
        },
        removeNominee: value => {
            dispatch({ type: actions.REMOVE_NOMINEE, value});
        }
    }

    return (
        <NominateContext.Provider value={data}>
            {children}
        </NominateContext.Provider>
    )
}

export {
    NominateContext,
    NominateProvider 
}