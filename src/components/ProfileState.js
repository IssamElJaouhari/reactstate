import React, { Component } from 'react';
import issameljaouhari from '../images/issameljaouhari.jpg';

class ProfileState extends Component {
  state = {
    person: {
      fullName: 'Issam El Jaouhari',
      bio: "Hi👋 How are you! I'm Issam El Jaouhari known as Izzy",
      imgSrc: issameljaouhari,
      profession: 'Software Developer',
    },
    shows: true,
    mountedAt: null,
    intervalId: null,
    elapsedTime: null,
  };

  componentDidMount() {
    const mountedAt = new Date();
    const intervalId = setInterval(() => {
      const elapsedTime = Math.round((new Date() - mountedAt) / 1000);
      this.setState({ elapsedTime });
    }, 1000);

    this.setState({ mountedAt, intervalId });
  }

  handleClick = () => {
    if (this.state.shows) {
      clearInterval(this.state.intervalId);
      this.setState({ mountedAt: null, intervalId: null, elapsedTime: null });
    } else {
      const mountedAt = new Date();
      const intervalId = setInterval(() => {
        const elapsedTime = Math.round((new Date() - mountedAt) / 1000);
        this.setState({ elapsedTime });
      }, 1000);

      this.setState({ mountedAt, intervalId });
    }

    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    return (
      <div className="App">
        <button onClick={this.handleClick}>Hit Me</button>
        {this.state.shows && (
          <div className="Person">
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        {this.state.elapsedTime !== null && (
          <p className='Elapsed'>Elapsed time: {this.state.elapsedTime} s</p>
        )}
      </div>
    );
  }
}

export default ProfileState;
