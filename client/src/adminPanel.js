import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './sass/adminPanel.scss'

import $ from 'jquery'

export default class AdminPanel extends React.Component{
    constructor(props){
        super(props)

        this.addArticle=this.addArticle.bind(this)
        this.handleSaveClick=this.handleSaveClick.bind(this)

        this.state={
            type:this.props.type
        }
    }

    addArticle(){
        const capLen=50
        let self=this
        let newArtName=$('#artName').val().trim()
        let artLen=newArtName.length
        if(artLen>0 && artLen<capLen){
            $.ajax({
                url: 'http://localhost:8080/weblogREST/api/web/article',
                method:'POST',
                contentType:'application/json',
                data:JSON.stringify({
                    name:newArtName,
                    pos:$('.mainContent ul li').length
                }),
                success: function(result){                
                    self.props.forceRerender()
                }
            })        
        }else if(artLen===0){
            alert('Нельзя добавлять статьи без названия')
        }else if(artLen>=capLen){
            alert('Название статьи должно быть не больше 50 символов')
        }

    }
    componentDidMount(){
        let self=this
        $('#artName').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
               event.preventDefault()            
               self.addArticle()
            }
        });
    }
    handleSaveClick(){
        let self=this
        
        let list=document.querySelectorAll('.mainContent ul li')
        list.forEach((el)=>{                                    
            let obj={
                id:Number,
                name:'',
                display:'',
                pos:Number
            }
            obj.id=el.getAttribute('data-id')
            obj.pos=el.getAttribute('data-pos')
            obj.name=el.querySelector('input').value
            obj.display=el.getElementsByClassName('disp')[0].checked?'active':'disabled'
            
            console.log(obj)
        })
        /*$.ajax(
            {
                url:`http://localhost:8080/weblogREST/api/web/article/${}`
            }
        )*/
    }
    render(){
        let panel=''
        switch(this.state.type){
            case 'article':
                panel=<div>
                
                    <Form>
                    <fieldset >
                        <legend>Добавление статьи</legend>
                        <Form.Group>
                            <Form.Control id='artName' type="text" placeholder="Название статьи" required />
                            <div className='admBtn mt-4 mb-0 ml-auto'>
                                <Button variant='outline-secondary' className='ml-auto' onClick={this.addArticle}>Добавить</Button>
                            </div>                            
                        </Form.Group>
                        </fieldset>        
                    </Form>          
                    <div id='saveArticlesButton' onClick={this.handleSaveClick}>
                        <span>Save</span>
                    </div>          
                            
                </div>
                break;            
        }
        return(
            <div className='mt-5'>
                {panel}
            </div>
        )
    }
}