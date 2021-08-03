import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const actions=( //<React.Fragment> can be shortened to <> and </>
        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>
    );
    return(
        <div>
            StreamDelete
            <Modal 
            title="Delete Stream"
            content="Are you sure you want to delete this stream?"
            actions={actions}
            onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;