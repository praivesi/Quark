import React, { Component } from  'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0px 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateSchedule extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/schedules/update/${this.props.id}` 
    }

    render(){
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteSchedule extends Component {
    deleteUser = event => {
        event.preventDefault()

        if(
            window.confirm(
                `Do you want to delete schedule ${this.props.id} permanently?`
            )
        ){
            api.deleteScheduleById(this.props.id)
            window.location.reload()
        }
    }

    render(){
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class SchedulesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            schedules: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount =  async () => {
        this.setState({isLoading: true})

        await api
                .getAllSchedules()
                .then(schedules => {
                    this.setState({
                        schedules: schedules.data.data,
                        isLoading: false
                    })
                })

    }

    render(){
        const {schedules, isLoading} = this.state
        console.log('TCL: SchedulesList -> render -> schedules', schedules)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true
            },
            {
                Header: 'FLOW',
                accessor: 'flow',
                filterable: true
            },
            {
                Header: 'GOAL',
                accessor: 'goal',
                filterable: true
            },
            {
                Header: 'START DATE',
                accessor: 'startDate',
                filterable: true
            },
            {
                Header: 'END DATE',
                accessor: 'endDate',
                filterable: true
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props){
                    return(
                        <span>
                            <DeleteSchedule id={props.original._id}/>
                        </span>
                    )
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props){
                    return(
                        <span>
                            <UpdateSchedule id={props.original._id}/>
                        </span>
                    )
                }
            }
        ]

        let showTable = true
        if(!schedules.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={schedules}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default SchedulesList