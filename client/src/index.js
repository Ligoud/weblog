import React from 'react';
import ReactDOM from 'react-dom';
//
import './sass/index.scss';
//
import CustomNavbar from './navbar'
import ContentPage from './contentPage'
import contentPage from './contentPage';
//
import $ from 'jquery'
//
class Page extends React.Component{
    constructor(props){
      super(props)
      //bind functions to call it inside the parent class
      // none, text
      this.state={
        contentType:'none',
        admin:true, //Включает свитчер для админа
        displayAdminPanel:false, //Включает Панель администратора на какой-либо странице
      }
      this.updateContent=this.updateContent.bind(this)
      this.toggleAdminPanel=this.toggleAdminPanel.bind(this)
      this.changeGridParameters=this.changeGridParameters.bind(this)

    }
    //Обновить контент страницы
    updateContent(type) {
      this.setState({contentType: type})
    }
    //Включить выключить админскую панель    
    toggleAdminPanel(){
        this.setState({displayAdminPanel:!this.state.displayAdminPanel})
    }
    //
    //Изменяет параметры отображения контента в админ моде
    changeGridParameters(){                
      //return возвращает бутстрап параметры для Row Col
      //
      if(this.state.displayAdminPanel){ //Убрать правый столбик
        $('body').addClass('admin') 
        //       xs|sm|md
        return([[0 ,2 ,4],  //Первый столбец
                [12,10,8],  //Второй столбец (мейн)
                [0 ,0 ,0]]) //Правый столбец (мб потом для эсайд нава будет)
      }else{  //Вернуть дефолтный столбик
        $('body').removeClass('admin') 
        return([[0 ,1 ,2], 
                [12,10,8],
                [0 ,1 ,2]])
      }
    }

    render(){
      
      let gridParameters=this.changeGridParameters()
      
      return(
        <div className='hideScrollBar'>
            <CustomNavbar 
              clickEvent={this.updateContent} 
              toggleAdminPanel={this.toggleAdminPanel} 
              admin={this.state.admin}
            />
            <ContentPage 
              key={this.state.contentType+Math.random().toString()} 
              contentType={this.state.contentType} 
              displayAdminPanel={this.state.displayAdminPanel} 
              changeGridParameters={this.changeGridParameters}
              gridParameters={gridParameters}
            />
        </div>
      )
    }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
