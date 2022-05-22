import { useReducer } from "react";
import { Action, InitState } from "../interfaces/interfaces";

export const useDropDownSow = () => {
    const initialState: InitState = {
        dropFeatures: false,
        dropCompany: false
    }

    const reducerFn = (state: InitState, action: Action) => {
        switch (action.type) {
            case 'FEATURE_OPEN': {
                return { ...state, dropFeatures: !state.dropFeatures };
            }
            case 'COMPANY_OPEN': {
                return { ...state, dropCompany: !state.dropCompany };
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducerFn, initialState)

    const handleClick = (type: string |undefined) => {
        dispatch({ type });
    };
    return {
        state, dispatch, handleClick
    }
}