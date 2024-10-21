import React, {Component} from "react";
import VideoOfMyCondo from '../../videos/myCondCapture.mkv'

class Video extends Component {
    render() {
      return (
        <div width="100%" height="100%">
         <video src={VideoOfMyCondo} width="100%" height="100%" controls="controls" autoplay="true"  />
        </div>
      );
    }
  }

  export default Video;