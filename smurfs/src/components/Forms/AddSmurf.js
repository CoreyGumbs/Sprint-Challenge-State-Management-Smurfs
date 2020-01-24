import React, {useState} from 'react';

const AddSmurf = () =>{
    const[value, setValue] =  useState('');

    return(
        <div className="smurf-form-container">
            <form  className="smurf-add-form">
                <label htmlFor="" className="smurf-form-label">
                    Add Name: 
                    <input type="text" className="smurf-input" required/>
                </label>
                <label htmlFor="" className="smurf-form-label">
                    Enter Age:
                    <input type="number" className="smurf-input" required/>
                </label>
                <label htmlFor="" className="smurf-form-label">
                    Enter Height: 
                    <input type="text" className="smurf-input" required/>
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddSmurf;