import React, {useState} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import { addNewSmurf }  from '../../actions/index';

const AddSmurf = (props) =>{
    const[name, setName] =  useState('');
    const[age, setAge] =  useState('');
    const[height, setHeight] = useState ('');
    let [id] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
    
        const smurf = {
            id: id++,
            name: name,
            age: age,
            height: `${height}cm`
        }

        props.addNewSmurf(smurf);

    }

    return(
        <div className="smurf-form-container">
            {props.isLoading && 
               <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} //3 secs
            />
            }

            {!props.isLoading &&
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
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.addSmurfData.isLoading
    }
}
export default connect(mapStateToProps, {addNewSmurf})(AddSmurf);