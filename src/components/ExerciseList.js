import React, { Fragment } from 'react'
import Card from './Card'

const ExerciseList = ({ exercise }) => (
    <Fragment>
    { exercise.map( ( exercise ) => (
        <Card
            key = { exercise.id }
            { ...exercise }
        />
    ))}
</Fragment>
)

export default ExerciseList;