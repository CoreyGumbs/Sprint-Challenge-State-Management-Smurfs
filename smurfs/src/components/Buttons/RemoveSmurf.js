import React from 'react';
import { connect } from 'react-redux';

const DeleteSmurf = () => {
    return(
        <div className="delete-btn-container">
            <button className="delete-btn">
                Delete
            </button>
        </div>
    );
}

const mapStateToProps = state => {}

export default connect(() => {}, {})(DeleteSmurf);