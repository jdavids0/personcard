import React, { useState } from 'react';

// class component version - don't forget, would need to import { Component }
/* class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            current: props.age
        }
    }
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        const changeAge = () => this.setState({current: this.state.current +1})
        return <div>
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { this.state.current }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ changeAge }>Birthday Button for { firstName } { lastName }</button>
                {/* can also do anonymous => function, see lecture video *//* }
            </div>
        </div>
        
    }
} */

// functional component version
const PersonCard = props => {
    const {firstName, lastName, hairColor} = props;
    
    const [age, setAge] = useState(props.age)

    const changeAge = () => {
        // to do something like increase by 10% each time button is clicked, would be
        // let newAge = age * 1.1;
        // setAge(newAge);
        setAge(age + 1)
    }

    return(
        <div>
            <h1>{ firstName }, { lastName } </h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ changeAge }>Birthday Button for { firstName } { lastName }</button>
        </div>
    );
}

export default PersonCard;