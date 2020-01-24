import React, {useState} from 'react';
import {connect} from 'react-redux';

const AddSmurf = () =>{
    const[name, setName] =  useState('');
    const[age, setAge] =  useState('');
    const[height, setHeight] = useState ('');

    const handleSubmit = e => {
        e.preventDefault();
        const obj = {
            name: name,
            age: age,
            height: height
        }

        console.log(obj);
    }

    return(
        <div className="smurf-form-container">
            <form  className="smurf-add-form" onSubmit={handleSubmit}>
                <label htmlFor="" className="smurf-form-label">
                    Add Name: 
                    <input type="text" name="name" value={name} className="smurf-input" onChange={e => setName(e.target.value)} required/>
                </label>
                <label htmlFor="" className="smurf-form-label">
                    Enter Age:
                    <input type="number"  name="age" value={age} className="smurf-input" onChange={e => setAge(e.target.value)} required/>
                </label>
                <label htmlFor="" className="smurf-form-label">
                    Enter Height: 
                    <input type="text" name="height" value={height} className="smurf-input" onChange={e => setHeight(e.target.value)} required/>
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.addSmurfData.isLoading
    }
}
export default connect(mapStateToProps, {})(AddSmurf);