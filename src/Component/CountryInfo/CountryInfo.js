import React from 'react';
import { useHistory } from 'react-router';
import './CountryInfo.css';

const CountryInfo = (props) => {
    console.log(props);
    const {name, flag} = props.CountryAttribute;

    const history = useHistory();
    const handleOnClickFunction = (hello) =>{
        const url = `/name/${hello}`;
        history.push(url);
    }
    return (
        <div className="single-country-container">
            <div>
                <img style= {{width: '100%'}} src={flag} alt=""/>
            </div>
            <div className="heading">
                <h4> {name} </h4>
                <button onClick={()=>{handleOnClickFunction(name)}} className="button-style">View Details</button>
            </div>
        </div>
    );
};

export default CountryInfo;