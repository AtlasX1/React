import React from 'react';

import {
    TabContent,
    TabPane,
    Nav,
    Card,
    Button,
    CardBody,
    Row,
    Col,
    ButtonGroup,
    UncontrolledCollapse,
    ListGroup
} from 'reactstrap';
import Mission from "./MissionList";
import Transport from "./BuyTransport"
import Gun from "./Gun"
import Armour from "./Armour"
import NavBarItem from "./NavBarItem"
//Масив даних про місії
const Data = [
    "Провести розвідку",
    "Знищити табір",
    "Перевезти пасажирів",
    "Гуманітарна допомога"
];
//Декоратор вертоліт
const Gelicopter = Transport => {
    Transport.armour = () => 75;
    Transport.fuel = () => 50;
    Transport.type = () => "Вертоліт";
    Transport.gun = () => "";
    Transport.weight = () => 12;
    Transport.dmg = () => 0;
}
//Декоратор дирижабль
const Airship = Transport => {
    Transport.armour = () => 50;
    Transport.fuel = () => 150;
    Transport.type = () => "Дирижабль";
    Transport.gun = () => "";
    Transport.weight = () => 90;
    Transport.dmg = () => 0;
}
//Декоратор літак
const Airplane = Transport => {
    Transport.armour = () => 100;
    Transport.fuel = () => 250;
    Transport.type = () => "Літак";
    Transport.gun = () => "";
    Transport.weight = () => 135;
    Transport.dmg = () => 0;
}

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '1'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }
    render() {
        return (
            <Card>
                <Nav tabs pills >
                    <NavBarItem data={this} name="Магазин" toggle='1' />
                    <NavBarItem data={this} name="Місії" toggle='2' />
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card>
                                    <ButtonGroup>
                                        <Button id="toggler1">Броня</Button>
                                        <Button id="toggler2">Зброя</Button>
                                        <Button id="toggler3">Вид транспорту</Button>
                                    </ButtonGroup>
                                    <UncontrolledCollapse toggler="#toggler1">
                                        <Card>
                                            <CardBody>
                                                <ListGroup >
                                                    <Armour data={this.props} number={10} />
                                                    <Armour data={this.props} number={20} />
                                                    <Armour data={this.props} number={30} />
                                                    <Armour data={this.props} number={40} />
                                                </ListGroup>
                                            </CardBody>
                                        </Card>
                                    </UncontrolledCollapse>
                                    <UncontrolledCollapse toggler="#toggler2">
                                        <Card>
                                            <CardBody>
                                                <ListGroup>
                                                    <Gun name="Кулемет" data={this.props} />
                                                    <Gun name="Ракетниця" data={this.props} />
                                                    <Gun name="Бомби" data={this.props} />
                                                </ListGroup>
                                            </CardBody>
                                        </Card>
                                    </UncontrolledCollapse>
                                    <UncontrolledCollapse toggler="#toggler3">
                                        <Card>
                                            <CardBody>
                                                <ListGroup>
                                                    <Transport Decorator={Gelicopter} data={this.props} name="Вертоліт" />
                                                    <Transport Decorator={Airplane} data={this.props} name="Літак" />
                                                    <Transport Decorator={Airship} data={this.props} name="Дирижабль" />
                                                </ListGroup>
                                            </CardBody>
                                        </Card>
                                    </UncontrolledCollapse>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card>
                                    <Mission data={Data} user={this.props} />
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Card >
        )
    }
}