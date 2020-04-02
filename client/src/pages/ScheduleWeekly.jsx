import React, {Component} from 'react'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0px 40px 40px 40px;
`

const AppContainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

const HeaderContainer = styled.header`
    padding: 1rem;
    border: 1px solid red;
`;

const ListWrapper = styled.div`
    width: 25%;
    float: left;
    padding: 15px;
    border: 1px solid red;
`;

const Main = styled.div`
    width: 75%;
    float: left;
    padding: 15px;
    border: 1px solid red;
`;

const WScheduleBorder = styled.ul`
    background-color: #654321;
    list-style: none;
    overflow-x: auto;
`;

const WItemBorder = styled.li`
    border: 3px solid #90bade;
    border-radius: 10px;
    display: inline-block;
    background: white;
    margin: 5px;
    padding: 15px;
`;

const WItem = ({schedule}) =>  (
    <WItemBorder>
        <li>FLOW: {schedule.flow}</li>
        <li>GOAL: {schedule.goal}</li>
        <li>START TIME: {schedule.startDate}</li>
        <li>END TIME: {schedule.endDate}</li>
    </WItemBorder>
)

const WSchedule = ({schedules}) => {
    return (
        <WScheduleBorder>
            {schedules.map((schedule, index) => (
                <WItem key={index} schedule={schedule}/>
            ))}
        </WScheduleBorder>
    )
}

class WeeklySchedule extends Component{
    constructor(props){
        super(props)
        this.state = {
            wSchedules: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async() => {
        this.setState({isLoading: true})

        await api
                .getAllSchedules() // TODO: Replace to getWeekSchedule(weekRange)
                .then(schedules => {
                    this.setState({
                        wSchedules: schedules.data.data,
                        isLoading: false
                    })
                })
    }

    render() {
        console.log('WeeklySchedule render() entered.')

        const {wSchedules, isLoading} = this.state

        return (
            <Wrapper>
                {isLoading === false && (
                    <WSchedule schedules={wSchedules} />
                )}
            </Wrapper>
        )
    }
}

export default WeeklySchedule