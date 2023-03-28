import React, { Component } from 'react';
import issameljaouhari from '../images/issameljaouhari.jpg'


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
      const elapsedTime = new Date() - mountedAt;
      this.setState({ elapsedTime });
    }, 1000);

    this.setState({ mountedAt, intervalId });
  }

  handleClick = () => {
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
          <p className='Elapsed'>Elapsed time: {this.state.elapsedTime} ms</p>
        </div>
      );
    }
  }

  export default ProfileState