import React from "react"
import {
    Card, CardText, CardBody,
    CardImg
} from 'reactstrap';
import logo from './logo.svg';
import { Container, Row, Col } from 'reactstrap';

const divStyle = {
    alignSelf: "stretch",
    paddingLeft: 0
};
const Transport_information = (props) => {
    return (
        <Card>
            <Container>
                <Row>
                    <Col xs="5">
                        <CardImg top width="10%" src={logo} style={divStyle} alt="Card image cap" />
                    </Col>

                    <Col style={{ backgroundColor: '  #a08441' }}>
                        <CardBody style={divStyle}>

                            <CardText>Броня:  {props.object.armour()}</CardText>
                            <CardText>Зброя:  {props.object.gun()}</CardText>
                            <CardText>Вид транспорту:  {props.object.type()}</CardText>
                            <CardText>Заповненість баку з пальним:  {props.object.fuel()}</CardText>
                            <CardText>Пошкодженість:  {props.object.dmg()}</CardText>
                            <CardText>Вага:  {props.object.weight()}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
export default Transport_information