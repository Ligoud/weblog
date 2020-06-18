import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//
export default class contentPage extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            type: props.contentType,
            content:this.getContent()
        }        
    }
    getContent(){
        let text=''
        switch (this.props.contentType) {  //Тут контент должен получать. Формат еще продумать надо
            case 'none':
                text=''
                break;
            case 'text':
                text='Привет, я контент.'
                break;
            default:
                text='Неопределенная страница'
                break;
        }
        return text
    }

    render(){
        return(
            <Container>
                <Row className='contentRow'>
                    <Col xs={0} sm={1} md={2}></Col>
                    <Col xs={12} sm={10} md={8} className="h-100 mainContent">
                        {this.state.content}
                    </Col>
                    <Col xs={0} sm={1} md={2}></Col>
                </Row>
            </Container>
        )
    }
}