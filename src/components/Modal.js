import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(  //renered directly in <body>, not nested
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                    ui standard modal visible active
            </div>
        </div>, //this second argt means rendered to div with id "modal"
        document.querySelector('#modal')
    );
};

export default Modal;

//use portals to create modals or render a react comp into html not created by my app
//or introduce react app into server side app like java or ruby on rails