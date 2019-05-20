import React from "react"
import {
    NavLink, NavItem
} from 'reactstrap';
import classnames from 'classnames';

const Data = ({ data, name, toggle }) =>
    <NavItem>
        <NavLink
            className={classnames({ active: data.state.activeTab === toggle })}
            onClick={() => { data.toggle(toggle); }}
            href="#"
        >
            {name}
        </NavLink>
    </NavItem>
export default Data
