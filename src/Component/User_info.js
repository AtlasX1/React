import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
const divStyle = {

    alignSelf: "stretch",
    paddingLeft: 0
};
const User_information = (props) => {
    return (
        <Card>
            <Container>
                <Row>
                    <Col>
                        <CardImg top width="10%" src={logo} style={divStyle} alt="Card image cap" />
                    </Col>
                    <Col>
                        <CardBody style={divStyle}>
                            <CardTitle>Ім'я: {props.name}</CardTitle>
                            <CardSubtitle>Золото: {props.gold}</CardSubtitle>
                            <CardText>Досвід:  {props.lvl}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
export default User_information