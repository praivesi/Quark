import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SchedulesList, SchedulesInsert, SchedulesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/schedules/list" exact component={SchedulesList}/>
        <Route path="/schedules/create" exact component={SchedulesInsert}/>
        <Route path="/schedules/update/:id" exact component={SchedulesUpdate}/>
      </Switch>
    </Router>
  )
}

export default App
