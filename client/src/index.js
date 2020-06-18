import React from 'react';
import ReactDOM from 'react-dom';
//
import './sass/index.scss';
//
import CustomNavbar from './navbar'
import ContentPage from './contentPage'
import contentPage from './contentPage';
//

class Page extends React.Component{
    constructor(props){
      super(props)
      //bind functions to call it inside the parent class
      // none, text
      this.state={
        contentType:'none'
      }
      this.updateContent=this.updateContent.bind(this)

    }
    updateContent(type) {
      this.setState({contentType: type})
    }
    render(){
      return(
        <div>
            <CustomNavbar clickEvent={this.updateContent} />
            <ContentPage key={this.state.contentType+Math.random().toString()} contentType={this.state.contentType} />
        </div>
      )
    }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
