import {FETCH_REPOS} from './types'

export function fetchRepos(pageNumber){
    return function(dispatch){
        fetch(`/api/repos?page=${pageNumber}`)
            .then(res =>{
                if(res.ok){
                    res.json()
                    
                    .then(data => {
                            dispatch({
                                type:FETCH_REPOS,
                                payload:data.repo.body,
                                totalPage:data.page.last!==undefined?data.page.last.page:parseInt(data.page.prev.page)+1,
                                per_page:data.page.last!==undefined?data.page.last.per_page:data.page.prev.per_page,
                                current_page:pageNumber,
                                isLoading:false
                            })
                        })
                        } else {throw Error(`Request rejected with status ${res.status}`);}
                } )              
    }
}
