import React, { Component } from 'react'
import styled from 'styled-components'

import api from '../api'

const Title = styled.h1.attrs({
  className: 'h1'  
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0px 30px;
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
    className: 'btn btn-primary'
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
    margin: 15px 15px 15px 5px;
`

class SchedulesInsert extends Component{
    constructor(props){
        super(props)

        this.state = {
            flow: '',
            goal: '',
            startDate: '',
            endDate: ''
        }
    }

    handleChangeInputFlow = async event => {
        const flow = event.target.value
        this.setState({flow})
    }

    handleChangeInputGoal = async event => {
        const goal  = event.target.value
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

    handleIncludeSchedule = async () => {
        const payload = this.state

        await api
                .insertSchedule(payload)
                .then(res => {
                    window.alert('Schedule inserted successfully')
                    this.setState({
                        flow: '',
                        goal: '',
                        startDate: '',
                        endDate: ''
                    })
                })
    }

    render() {
        const { flow, goal, startDate, endDate } = this.state

        return (
            <Wrapper>
                <Title> Create Schedule </Title>

                <Label>Flow: </Label>
                <InputText
                    type="text"
                    value={flow}
                    onChange={this.handleChangeInputFlow}
                />

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

                <Label>End Date: </Label>
                <InputText
                    type="text"
                    value={endDate}
                    onChange={this.handleChangeInputEndDate}
                />

                <Button onClick={this.handleIncludeSchedule}>Add Schedule</Button>
                <CancelButton href={'/schedules/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SchedulesInsert