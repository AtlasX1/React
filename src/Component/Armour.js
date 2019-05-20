import React from "react"
import {
    ListGroupItem,
    Container
} from 'reactstrap';


const Data = ({ number, data }) =>
    <div>
        <Container>
            <ListGroupItem tag="button" action onClick={() => {
                let tmp = data.object.armour()
                data.object.armour = () => tmp + number;
                data.updateData(data.object)
                let tmp2 = + data.user.gold()
                tmp2 -= number
                data.user.gold = () => tmp2;
                data.updateUser(data.user)
            }}>Купити {number} броні</ListGroupItem>
        </Container>

    </div>
export default Data
