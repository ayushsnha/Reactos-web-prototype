import {FETCH_REPOS} from '../actions/types'

const initialState={
    items:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_REPOS:
        return {
            ...state,
            items:action.payload
        };
        default:
        return state;
    }
}