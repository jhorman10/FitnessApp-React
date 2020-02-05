import React, { Fragment } from 'react';
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome';
import Plus from '../components/Plus'

const Exercises = ({ data }) => (
    <Fragment>
        <Welcome
            username="Chris"
        />
        <ExerciseList
            exercise={ data }
        />
        <Plus />
    </Fragment>
)

export default Exercises;