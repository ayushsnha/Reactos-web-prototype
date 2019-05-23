import {FETCH_REPOS} from '../actions/types'

const initialState={
    items:[],
    isLoading:true,
    TotalPage:0
}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_REPOS:
        return {
            ...state,
            isLoading:false,
            items:action.payload,
            TotalPage:action.paging
        };
        default:
        return state;
    }
}