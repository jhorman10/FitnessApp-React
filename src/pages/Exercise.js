import React, { Component } from 'react';
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome';
import Plus from '../components/Plus'
import Loading from '../components/Loading';
import FatalError from './500';

class Exercise extends Component {

    state = {
        data: [],
        loading: true,
        error: null,
    }

    async componentDidMount () {
        await this.fetchExercises();
    }

    fetchExercises =  async () => {
         try {

            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
   
            this.setState({
                data,
                loading: false,
            });

         } catch (error) {

            this.setState({
                loading: false,
                error
            });

         }
    }

    render() {

        if (this.state.loading)
            return <Loading/>
            
        if (this.state.error) 
            return <FatalError/>

        return (
            <div >
                <Welcome
                    username="Chris"
                />
                <ExerciseList
                    exercise={this.state.data}
                />
                <Plus />
            </div>
        )
    }

}

export default Exercise;