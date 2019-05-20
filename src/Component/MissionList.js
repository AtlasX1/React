import React from "react"
import {
    ListGroupItem,
    Container
} from 'reactstrap';
//Компонувальник 
const Data = ({ data, user }) =>
    <div>
        {/* Функція проходження по масиву даних */}
        {data.map((el) =>
            <Container>
                {/* Рядок списку в якому є опис завдання */}
                <ListGroupItem tag="button" action onClick={() => {
                    let tmp2 = + user.user.gold()
                    tmp2 += 30
                    user.user.gold = () => tmp2;
                    user.updateUser(user.user)
                }}>{el}
                    {/* Рядок в якому описується винагорода */}
                    <p style={{ paddingLeft: 0 }}>Винагорода: 30 золотих </p>
                </ListGroupItem>
            </Container>
        )}
    </div>

// Кінець компонувальника
export default Data
