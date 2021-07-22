import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

//use functional component to use componenetDidMount because only want to fetch list of streams once
class StreamList extends React.Component {
   componentDidMount() {
      this.props.fetchStreams();
   }

   renderAdmin(stream) {
      if (stream.userId === this.props.currentUserId) {
         return(
             <div className="right floated contend">
                 <button className="ui button primary">Edit</button>
                 <button className="ui button negative">Delete</button>
             </div>
         );
      }
   }

   renderList() {
      return this.props.streams.map((stream) => {
         return (
            <div className="item" key={stream.id}>
                   {this.renderAdmin(stream)}
               <i className="large middle aligned icon camera" />
               <div className="content">
                  {stream.title}
                  <div className="description">{stream.description}</div>
               </div>
            </div>
         );
      });
   }

   render() {
      return (
         <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      streams: Object.values(state.streams), //turns all values into an arry (currenntly in state as objects)
      currentUserId: state.auth.userId, //gets userId from state available to comp
   };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
