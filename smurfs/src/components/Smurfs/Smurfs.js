import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const Smurfs = (props) => {

    useEffect(()=> {
        const body =  document.querySelector('body');
        console.log(body);
    }, [props.data]);

    console.log(props);
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