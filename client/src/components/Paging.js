import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { connect } from 'react-redux'

class Paging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange=this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={2}
          totalItemsCount={this.props.page*2}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps= state=>({
    page: state.repos.TotalPage
    });
export default  connect(mapStateToProps)(Paging) 