
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';


class NoAccess extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    render() {
        return (
            <div className='alert alert-danger'>
                <h1>Not Authorized</h1>
                <h2>access denied</h2>
            </div>
        );
    }
    }
export default NoAccess;

