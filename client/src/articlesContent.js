import React from 'react'

import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import './sass/articles.scss'

import $ from 'jquery'

export default class Articles extends React.Component{
    constructor(props){
        super(props)

        this.displaySingleArticle=this.displaySingleArticle.bind(this)
        this.formListOfArticles=this.formListOfArticles.bind(this)
        this.onDeleteArticle=this.onDeleteArticle.bind(this)
        this.reLoadArticles=this.reLoadArticles.bind(this)

        this.state={
            articles:'',
            rerenderArticles:false
        }
    }
    reLoadArticles(){
        let self=this
        $.ajax({
            url: 'http://localhost:8080/weblogREST/api/web/article',
            success: function(data){
                //console.log(data)
                self.setState({articles:data,rerenderArticles:true})
            },
            error: function(error){//На всякий случай
                self.setState({articles:'',rerenderArticles:false})
            }
        })
    }
    componentDidMount(){              
       this.reLoadArticles()

    }
    componentDidUpdate(){
        
    }
    
    onDeleteArticle(ev){
        let deletedID=ev.target.getAttribute('data-deletedid')
        console.log(deletedID)
        let self= this
        $.ajax({
            url:`http://localhost:8080/weblogREST/api/web/article/${deletedID}`,
            method:'DELETE',
            success:function(){                
                self.props.forceRerender()
            }
        })
        
    }
    displaySingleArticle(artName,id){
        let res
        if(this.props.displayAdminPanel){
            res=<InputGroup>
            <FormControl type='text' defaultValue={artName} required/>
                <InputGroup.Append data-inputgroupid={id}>                    
                    <InputGroup.Checkbox className='disp' title='Отображать статью?' defaultChecked='true' data-checkedid={id}/>
                    <InputGroup.Text className='del' title='Удалить вопрос' onClick={this.onDeleteArticle} data-deletedid={id}>X</InputGroup.Text>
                </InputGroup.Append>                
            </InputGroup>
        }else{
            res=<span>{artName}</span>
        }
        return res
    }
    formListOfArticles(){
        let list=[]
        if(this.state.rerenderArticles){
            this.state.articles.forEach(el=>{
                list.push(<li className='list-group-item' key={'key'+el.id} data-id={el.id} data-pos={el.pos}>
                            {this.displaySingleArticle(el.name,el.id)}
                        </li>)
            })
        }
        return list
    }
    render(){
        //let articleNames=this.displayArticles() //Как отображается название для статей
        
        let list=this.formListOfArticles()
        
        //
        return(
            <Container className='p-0 pt-3'>
               <h2>Статьи:</h2>
               <ul className='list-group list-group-flush'>
                   {list}
               </ul>
            </Container>
        )
    }
}