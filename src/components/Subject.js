import React, { Component } from 'react';

class Subject extends Component {
    render(){
        console.log('subject render')
      return (
        <header>
              <h1><a href=""></a>{this.props.title}</h1>
              {this.props.sub}
        </header>
      );
    }
  }

export default Subject;