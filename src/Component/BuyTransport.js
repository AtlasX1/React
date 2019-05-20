import React from "react"
import {
    ListGroupItem,
    Container
} from 'reactstrap';


const Data = ({ data, name, updateData, Decorator }) =>
    <div>
        <Container>
            <ListGroupItem tag="button" action onClick={() => {
                Decorator(data.object);
                data.updateData(data.object)
            }}>{name}</ListGroupItem>
        </Container>

    </div>
export default Data
