import {FETCH_REPOS} from './types'

export function fetchRepos(){
    return function(dispatch){
        fetch("/api/repos")
            .then(res =>{
                if(res.ok){
                    res.json()
                    
                    .then(data => {
                            dispatch({
                                type:FETCH_REPOS,
                                payload:data.repo.body,
                                paging:data.page.last.page,
                                isLoading:false
                            })
                        })
                        } else {throw Error(`Request rejected with status ${res.status}`);}
                } )              
    }
}
