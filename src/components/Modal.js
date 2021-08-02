import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(  //renered directly in <body>, not nested
                                //e.stopPropagation stops onClick=>history from acting on modal, only on background
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    Delete Stream
                </div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>, //this second argt means rendered to div with id "modal"
        document.querySelector('#modal')
    );
};

export default Modal;

//use portals to create modals or render a react comp into html not created by my app
//or introduce react app into server side app like java or ruby on rails