import React from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component { 
  
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List o Posts</div>
    );
  }
}

export default connect(null, { fetchPosts } )(PostsIndex);