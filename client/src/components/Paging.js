import React, { Component } from "react";
import { connect } from 'react-redux'
import styles from './css/paging.css'

class Paging extends Component {
    componentWillMount(){
        this.props.fetchRepos(1);
    }

  render() {
    const pageNumbers = [];
    let renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';
      
        if (number == 1 || number == this.state.total || (number >= this.state.current_page - 2 && number <= this.state.current_page + 2)) {
          return (
            <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
          );
        }
      });


    return (
     <div className={styles.pagination}>
        <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
        {renderPageNumbers}
        <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
      </div>
    );
  }
}

const mapStateToProps= state=>({
    repos: state.repos.items,
    page: state.repos.TotalPage
    });
export default  connect()(Paging) 