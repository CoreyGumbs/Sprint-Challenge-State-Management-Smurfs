import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchSmurfData } from '../../actions/index';

const Smurfs = (props) => {

    useEffect(()=> {
        props.fetchSmurfData();
    }, []);
 
    return(
        <div className="smurfs-container">
            {props.isLoading && 
               <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} //3 secs
            />
            }
            <h1>Smurfs Page</h1>
        </div>
    );
}

const mapStateToProps =  state => {
    return{
        isLoading: state.isLoading,
        data: state.data
    }
}

export default connect(mapStateToProps, {fetchSmurfData})(Smurfs);