import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const Smurfs = () => {
    return(
        <div className="smurfs-container">

        </div>
    );
}

const mapStateToProps =  state => {
    return{
        data: state.data
    }
}

export default connect(mapStateToProps, {})(Smurfs);