import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{  
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
    return(
        <div>
            <h3>Edit A Stream</h3>
            <StreamForm 
            initialValues={{title: 'edit me', description: 'change the diaper'}}
            onSubmit={this.onSubmit} />
        </div>
    )
    }
}


//ownProps is from react router dom, state from react-redux
const mapStateToProps = (state, ownProps) => {''
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);