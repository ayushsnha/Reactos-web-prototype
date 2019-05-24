import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchRepos} from '../redux/actions/repoActions'
import Loading from './Loading'
import './css/panels.css'
import  './css/paging.css'

class Panels extends Component {
    componentWillMount(){
        this.props.fetchRepos(1);
    }


    renderRepo=(repo)=>{
            
        return(
            <div className='panel panel-default' key={repo.id}>
                        <div className="panel-body"><h3> <a href={repo.html_url} >{repo.name}</a> :
                            <span className="badge badge-secondary">Forks:{repo.forks}</span>
                            <span className="badge badge-primary">Open issues:{repo.open_issues}</span>
                            <span className="badge badge-info">Watchers:{repo.watchers}</span>
                        </h3>
                            <p>{repo.description}</p>
                            <p><strong>Created at:</strong>{repo.created_at}</p>
                            <p><strong>Last Updated:</strong>{repo.updated_at}</p>
                            <h5><span className="label label-default">Language:{repo.language}</span></h5>
                    </div>
                    <hr></hr>
                </div> 
        )

    }

  render() {
    //let total=this.props.totalPage*this.props.per_page
    console.log(this.props.totalPage)
    const pageNumbers = [];
      for (let i = 1; i <= this.props.totalPage; i++) {
        pageNumbers.push(i);
      }


      const renderPageNumbers = pageNumbers.map(number => {
        let classes = this.props.current_page === number ? 'active' : '';

        return (
          <span key={number} className={classes} onClick={() => this.props.fetchRepos(number)}>{number}</span>
        )
      })
    

    return (
      <div>
                    {this.props.load === false ? 
                    <div>
                        <div>
                        {this.props.repos.map(this.renderRepo)}
                        </div>
                        <div className="pagination">
                        <span onClick={() => this.props.fetchRepos(1)}>&laquo;</span>
                        {renderPageNumbers}
                        <span onClick={() => this.props.fetchRepos(1)}>&raquo;</span>
                        </div>
    
                    </div> :
                    <div className='pos'><Loading/></div>
                    }
                    
                    
      </div>
    )
  }
}

Panels.propTypes={
    fetchRepos:PropTypes.func.isRequired,
    
}

const mapStateToProps= state=>({
    repos: state.repos.items,
    load:state.repos.isLoading,
    totalPage:state.repos.totalPage,
    per_page:state.repos.per_page,
    current_page:state.repos.current_page

});
export default  connect(mapStateToProps,{fetchRepos})(Panels) 