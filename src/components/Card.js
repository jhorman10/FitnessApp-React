import React, { Component } from 'react';
import circlesImg from '../images/circles.png';
// import brazo from '../images/brazo.png';
import '../components/styles/Card.css'

class Card extends Component {
    render(){
        const { title, description, img, rightColor, leftColor } = this.props;
        return (
            <div className="card mx-auto Fitness-Card"
            style = {{
                backgroundImage: `url(${ circlesImg }), linear-gradient(to right, ${ leftColor }, ${ rightColor })`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img 
                            // this.state.
                                src = { img } 
                                className="float-right"
                            />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{ title }</h1>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;