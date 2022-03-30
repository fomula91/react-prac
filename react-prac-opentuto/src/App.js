import React, { Component } from 'react';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Subject from './components/Subject'
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      subject:{title: 'Web', sub: 'world wide Web'},
      welcome: {title:'Welcome!', desc:'hello React!!!'},
      content: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
  getReadContent(){
    let i = 0;
    while(i<this.state.content.length){
      let data = this.state.content[i]

      console.log('this is data -->'+data.id)
      if(data.id === this.state.selected_content_id){
        console.log('catch!!!!')
      return data;
      }
      i = i + 1;
    }
  }
  getContent(){
    let _title, _desc = null;
    let _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>

    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        let _content = Array.from(this.state.content)
        _content.push({id:this.max_content_id, title:_title, desc:_desc})
        this.setState(
          {content: _content,
            mode: 'read',
            selected_content_id: this.max_content_id}
        );
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      var _content=  this.getReadContent()
      _article = <UpdateContent 
        data={_content} 
        onSubmit={function(_id,_title, _desc){
          let _content = Array.from(this.state.content);
          let i = 0;
          while(i < _content.length){
            if(_content[i].id === _id){
              _content[i] = {id:_id, title:_title, desc:_desc}
              break;
            }
            i = i+1;
          }
              
        this.setState(
          {content: _content,
           mode: 'read'}
        );
      }.bind(this)}></UpdateContent>
  } return _article;
  }
  render() {
    console.log('app render')
    return (
      
      <div class="App">
      hello, react!!
      <Subject title={this.state.subject.title} 
              sub={this.state.subject.sub} 
              onChangePage={function() {
                  this.setState({mode: 'welcome'});}.bind(this)}
                  ></Subject>
      
      <TOC onChangePage={function(id) {
        
        this.setState({
          mode: 'read',
          selected_content_id: Number(id)})}
        .bind(this)} data={this.state.content}
      ></TOC>
      <Control onChangeMode={function(_mode){
        if(_mode === 'delete'){
          if(window.confirm('really?')){
            let _content = Array.from(this.state.content)
            let i = 0;
            while(i< this.state.content.length){
              if(_content[i].id === this.state.selected_content_id){
                _content.splice(i,1)
                break
              }
              i = i+1;
            }
            this.setState({
              mode: 'welcome',
              content: _content
            });
            alert('deleted!');
          }
        }else{
          this.setState({
            mode: _mode
          });
        }
        
      }.bind(this)}></Control>
      {this.getContent()}
      </div>
    );
  }
}

export default App;
