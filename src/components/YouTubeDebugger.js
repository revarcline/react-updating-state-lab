import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  setBitrate = () =>
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });

  setResolution = () =>
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: "720p" },
      },
    });

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>
          bitrate up
        </button>
        <button className="resolution" onClick={this.setResolution}>
          resolution down
        </button>
      </div>
    );
  }
}
