import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    componentDidMount(){
        window.gapi.load('client:auth2', () => { //accessing variable through window scope  //arrow function as secd argt gets called after 'client:auth2' loads
            window.gapi.client.init({    //initialize client library with objt containing clientId and scope.      
                clientId: '889136131431-0hkninv3vt988ecjfpn3fh87t6e5i0ot.apps.googleusercontent.com', //
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //assigns object to this.auth
                this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //is signed in?
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); 
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn){
            return(
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return(
                <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;