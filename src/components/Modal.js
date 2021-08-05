import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
    return ReactDOM.createPortal(  //renered directly in <body>, not nested
                                //e.stopPropagation stops onClick=>history from acting on modal, only on background
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <i onClick={props.onDismiss} className="close icon"></i>
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>, //this second argt means rendered to div with id "modal"
        document.querySelector('#modal')
    );
};

export default Modal;

//use portals to create modals or render a react comp into html not created by my app
//or introduce react app into server side app like java or ruby on rails