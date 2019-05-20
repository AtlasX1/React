import React from "react"
import {
    ListGroupItem,
    Container
} from 'reactstrap';


const Data = ({ data, name }) =>
    <div>
        <Container>
            <ListGroupItem tag="button" action onClick={() => {
                data.object.gun = () => name;
                data.updateData(data.object)
            }}>{name}</ListGroupItem>
        </Container>

    </div>
export default Data
