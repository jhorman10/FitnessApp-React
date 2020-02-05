import React from 'react';
import ExcerciseForm from '../components/ExcerciseForm';
import Card from '../components/Card';

const ExerciseNew = ({ form, onChange, onSubmit }) => (
    <div className = "row">
        <div className = "col-sm-6">
            <Card { ...form }/>
        </div>
        <div className = "col-sm-6">
            <ExcerciseForm
                onChange = { onChange }
                onSubmit = { onSubmit }
                form = { form }
            />
        </div>
    </div>  
)

export default ExerciseNew;