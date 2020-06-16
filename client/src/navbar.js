import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

export  default class CustomNavbar extends React.Component{

    render(){
      return(
        <div>
            <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
              <Navbar.Brand href='#home'>ВЕБ-Логопед</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">              
                <Nav className='mr-auto'>
                    <Nav.Link>Расписание</Nav.Link>
                    <NavDropdown title='Информация'>
                      <NavDropdown.Item>Принципы работы</NavDropdown.Item>
                      <NavDropdown.Item>О логопеде</NavDropdown.Item>
                      <NavDropdown.Item>Об онлайн занятиях</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Контакты</Nav.Link>
                    <Nav.Link disabled>Игры (скоро)</Nav.Link>
                </Nav>
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