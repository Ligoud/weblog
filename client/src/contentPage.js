import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//
import Articles from './articlesContent'
import AdminPanel from './adminPanel'
//
export default class contentPage extends React.Component{
    constructor(props){
        super(props)
        this.getContent=this.getContent.bind(this)
        this.forceRerender=this.forceRerender.bind(this)

        this.state={
            type: props.contentType,
            content: this.getContent(),  //Контент для страницы с контентом     
        }        
    }

    getContent(){
        let content=''
        switch (this.props.contentType) {  //Тут контент должен отрисовываться
            case 'none':                
                break;
            case 'shedule':
                content='Привет, я расписание.'
                break;
            case 'articles':
                content=<Articles  
                    displayAdminPanel={this.props.displayAdminPanel}
                    forceRerender={this.forceRerender}
                />
                break;
            case 'links':
                break;
            default:
                content='Неопределенная страница'
                break;
        }
        return content
    }    
    //Костыль?!
    forceRerender(){
        
        this.forceUpdate()
    }
    
    render(){
        let adminPanel=''
        //
        if(this.props.displayAdminPanel){
            switch(this.state.type){
                case 'articles':
                    adminPanel=<AdminPanel type='article' forceRerender={this.forceRerender}/>
                    break;
            }            
        }
        
        //
        let grid=this.props.gridParameters
        
        //
        return(
            <Container fluid className='mx-0'>
                <Row className='contentRow'>
                    <Col xs={grid[0][0]} sm={grid[0][1]} md={grid[0][2]}>
                        {adminPanel}
                    </Col>
                    <Col xs={grid[1][0]} sm={grid[1][1]} md={grid[1][2]} className="h-100 mainContent hideScrollBar" key={'key'+Math.random()}>
                        {this.state.content}
                    </Col>
                    <Col xs={grid[2][0]} sm={grid[2][1]} md={grid[2][2]}></Col>
                </Row>
            </Container>
        )
    }
}