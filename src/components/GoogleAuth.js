import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'; 

class GoogleAuth extends React.Component {
    
    componentDidMount(){
        window.gapi.load('client:auth2', () => { //accessing variable through window scope  //arrow function as secd argt gets called after 'client:auth2' loads
            window.gapi.client.init({    //initialize client library with objt containing clientId and scope.      
                clientId: '889136131431-0hkninv3vt988ecjfpn3fh87t6e5i0ot.apps.googleusercontent.com', //
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //assigns object to this.auth
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); 
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);