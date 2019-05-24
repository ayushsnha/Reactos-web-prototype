import {FETCH_REPOS} from '../actions/types'

const initialState={
    items:[],
    isLoading:true,
    totalPage:null,
    per_page:null,
    current_page:null,
}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_REPOS:
        return {
            ...state,
            isLoading:false,
            items:action.payload,
            totalPage:action.totalPage,
            per_page:action.per_page,
            current_page:action.current_page,
        };
        default:
        return state;
    }
}