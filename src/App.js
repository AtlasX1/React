import React from "react"
import { Media } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import UserCard from "./Component/User_info"
import TransportCard from "./Component/Transport_info"
import MenuCard from "./Component/MainMenu"
import './App.css';
import MyPlaceHolderPicture from './img1.png';
const divStyle = {
  paddingRight: 0,
  paddingLeft: 0
};

//Клас транстпорт
class Transport {
  armour() {
    return this.armour
  }
  gun() {
    return this.gun
  }
  type() {
    return this.type
  }
  fuel() {
    return this.fuel
  }
  dmg() {
    return this.dmg
  }
  weight() {
    return this.weight
  }
}
//Клас користувача
class User {
  gold() {
    return this.gold
  }

}
//Створення об'єктів Користувач та транспорт
let Use = new User()
let Transp = new Transport()

Use.gold = () => 75;

//Фасад для надання зручного інтерфейсу
class MyGame extends React.Component {
  //Користувач та транспорт
  state = {
    dataTransp: Transp,
    dataUser: Use
  }
  //Функція для обновлення даних
  updateData = (newObj) => {
    this.setState(state => {
      return { dataTransp: newObj }
    })
  }
  //Функція для обновлення даних
  updateUser = (newOb) => {
    //Use.gold = newOb.gold()
    this.setState(state => {
      return { dataUser: newOb }
    })
  }

  //Функція побудови HTML сторінки
  render() {
    return (
      <Container fluid>


        <Row>
          <Col xs={1} md={1} style={divStyle}>
            <Media object src={MyPlaceHolderPicture} 
            style={{
              maxHeight: 1100,
              maxWidth: 2100
            }} />
          </Col>
          <Col xs="5" style={divStyle}>

            {/* Опис користувача */}
            <Col style={divStyle}>
              <UserCard
                name="Serhiy"
                gold={this.state.dataUser.gold()}
                lvl="250"
              />
            </Col>
            {/* Опис транспорта */}
            <Col style={divStyle}>

              <TransportCard
                object={Transp}
                armour={this.state.dataTransp.armour()}
                gun={this.state.dataTransp.gun()}
                type={this.state.dataTransp.type()}
                fuel={this.state.dataTransp.fuel()}
                dmg={this.state.dataTransp.dmg()}
                weight={this.state.dataTransp.weight()} />

            </Col>
          </Col>
          {/* Головне меню */}
          <Col style={{ paddingLeft: 3 }}>
            <MenuCard
              object={Transp}
              user={Use}
              updateData={this.updateData}
              updateUser={this.updateUser}

            />
          </Col>
        </Row>
      </Container>
    )
  }
}


export default MyGame
