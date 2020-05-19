import React, { Component } from 'react'
import { Consumer } from '../../context'
import Track from './Track';


 class Tracks extends Component {
    render() {
        return (
           <Consumer>
               {value => {
                   const { track_list, heading } = value;
                   console.log(value);
                   if(track_list === undefined || track_list.length === 0) {
                    return <h1>Loading...</h1>
                   }else {
                    return(
                        <React.Fragment>
                            <h3 className="text-center mb-4">
                            {heading}
                            </h3>
                        <div className="row">
                        {track_list.map(item =>(
                            <Track key={item.track.track_id} track = {item.track} />
                        ))}
                    </div>
                    </React.Fragment>
                    ) 
                   }
               }}
           </Consumer>
        )
    }
}

export default Tracks;