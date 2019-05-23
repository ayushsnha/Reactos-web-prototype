import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchRepos} from '../redux/actions/repoActions'
import Loading from './Loading'
import './css/panels.css'

class Panels extends Component {
    componentWillMount(){
        this.props.fetchRepos();
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

    return (
      <div>
                    {this.props.load === false ? 
                    <div>{this.props.repos.map(this.renderRepo)}</div> :
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
    load:state.repos.isLoading
});
export default  connect(mapStateToProps,{fetchRepos})(Panels) 