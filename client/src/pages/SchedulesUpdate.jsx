import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control'
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`
})`
    margin: 15px 15px 15px 5px;
`

class SchedulesUpdate extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            goal: '',
            startDate: '',
            endDate: ''
        }
    }

    handleChangeInputGoal = async event => {
        const goal = event.target.value
        this.setState({ goal })
    }

    handleChangeInputStartDate = async event => {
        const startDate = event.target.value
        this.setState({ startDate })
    }

    handleChangeInputEndDate = async event => {
        const endDate = event.target.value
        this.setState({ endDate })
    }

    handleUpdateSchedule = async () => {
        const payload = this.state

        await api.updateScheduleById(this.state.id, payload)
                .then(res => {
                    window.alert(`Schedule updated successfully`)
                })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const schedule = await api.getScheduleById(id)

        this.setState({
            goal: schedule.data.data.goal,
            startDate: schedule.data.data.startDate,
            endDate: schedule.data.data.endDate
        })
    }

    render(){
        const { goal, startDate, endDate } = this.state
        return (
            <Wrapper>
                <Title>Update Schedule</Title>
                
                <Label>Goal: </Label>
                <InputText
                    type="text"
                    value={goal}
                    onChange={this.handleChangeInputGoal}
                />

                <Label>Start Date: </Label>
                <InputText
                    type="text"
                    value={startDate}
                    onChange={this.handleChangeInputStartDate}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={endDate}
                    onChange={this.handleChangeInputEndDate}
                />

                <Button onClick={this.handleUpdateSchedule}>Update Schedule</Button>
                <CancelButton href={'/schedules/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SchedulesUpdate