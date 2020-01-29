import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercise from '../pages/Exercise';
import ExerciseNew from '../pages/ExerciseNew';
import NotFound from '../pages/404'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route 
                exact path = "/" 
                component = { Exercise }
            />
            <Route 
                exact path = "/new" 
                component = { ExerciseNew }
            />
            <Route 
                component = { NotFound }
            />
        </Switch>
    </BrowserRouter>
)

export default App;