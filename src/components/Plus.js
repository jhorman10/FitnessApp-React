import React from  'react';
import PlusImg from '../images/add.png';
import { Link } from 'react-router-dom';

const Plus = () => (
    <Link to="/new">
        <img 
            className="Fitness-Add" 
            src = { PlusImg } 
            alt = ""
        />
    </Link>
)

export default Plus;