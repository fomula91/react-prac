import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Java script</a></li>
            </ul>
        </nav>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article>
      <h2>{this.props.title}</h2>
      {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div class="App">
      hello, react!!
      <Subject title="WEB" sub="world wide Web!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup language"></Content>

      </div>
    );
  }
}

export default App;
