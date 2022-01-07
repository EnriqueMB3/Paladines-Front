import { types } from "../types/types";

const initialState = {
    heroes: [],
    category: null,
    active: false
}


export const questionReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.heroesLoaded:
            return {
                ...state,
                heroes: [...action.payload]
            }
        case types.setActiveHero:
            return {
                ...state,
                activeHero: {...action.payload},
                active: action.payload? true: false
            }
        case  types.categoryLoaded:
            return{
                ...state,
                category: action.payload
            }
         
        default:
            return state;
    }
}

