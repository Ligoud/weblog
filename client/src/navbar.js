import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

import './sass/navbar.scss'

export default class CustomNavbar extends React.Component{
    constructor(props){
        super(props)

        this.state={
            admin:this.props.admin,
        }
    }
    
    render(){
      let adminSwitcher=''
      if(this.state.admin)
        adminSwitcher= <Nav className='ml-auto'>
                          <Form >
                            <Form.Switch
                              inline
                              custom
                              id='adminSwitcher'
                              label='Admin'
                              onChange={this.props.toggleAdminPanel}
                            />
                          </Form>
                        </Nav>


      return(
        <div>
            <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' className='customNav'>
              <Navbar.Brand href='#home'>ВЕБ-Логопед</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">              
                <Nav className='mr-auto'>
                    <Nav.Link onClick={(type)=>this.props.clickEvent('shedule')}>Расписание</Nav.Link>
                    <NavDropdown title='Информация'>
                      <NavDropdown.Item>Принципы работы</NavDropdown.Item>
                      <NavDropdown.Item>О логопеде</NavDropdown.Item>
                      <NavDropdown.Item>Об онлайн занятиях</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={type=>this.props.clickEvent('failed')}>Контакты</Nav.Link>
                    <Nav.Link onClick={(type)=>this.props.clickEvent('articles')}>Статьи</Nav.Link>
                    <Nav.Link onClick={(type)=>this.props.clickEvent('links')}>Ссылки</Nav.Link>
                    <Nav.Link disabled>Игры (скоро)</Nav.Link>
                </Nav>
                {adminSwitcher}
                <Nav>                  
                  <NavDropdown drop='left' title='Личный кабинет' id='cabinet'>
                    <div>
                      <NavDropdown.Item>Войти</NavDropdown.Item>
                      <NavDropdown.Item>Зарегистрироваться</NavDropdown.Item>
                    </div>                  
                    <div className='d-none' id='logedin'>
                      <NavDropdown.Item>Профиль</NavDropdown.Item>
                      <NavDropdown.Item>Онлайн чат</NavDropdown.Item>
                      <NavDropdown.Item>Выйти</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
      )
    }
}