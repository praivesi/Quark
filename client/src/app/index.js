import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SchedulesList, SchedulesInsert, SchedulesUpdate, ScheduleWeekly } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/schedules/list" exact component={SchedulesList}/>
        <Route path="/schedules/create" exact component={SchedulesInsert}/>
        <Route path="/schedules/update/:id" exact component={SchedulesUpdate}/>
        <Route path="/schedules/weekly" exact component={ScheduleWeekly}/>
      </Switch>
    </Router>
  )
}

export default App
