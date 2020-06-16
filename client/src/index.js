import React from 'react';
import ReactDOM from 'react-dom';
//
import './sass/index.scss';
//
import CustomNavbar from './navbar'
//

class Page extends React.Component{
    constructor(props){
      super(props)
      this.state={
        pageBody
      }
    }
    render(){
      return(
        <div>
            <CustomNavbar />
        </div>
      )
    }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
