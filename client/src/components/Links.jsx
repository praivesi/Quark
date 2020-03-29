import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse nav-bar-collapse'
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

class Links extends Component {
    render(){
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Quark Time
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                                Schedules
                            </Link>
                            <Link to="/create" className="nav-link">
                                Create Schedule
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links