import React from "react";
import videoBack from './video/My Movie 19.mp4';
import videoBack2 from './video/My Movie 19.webm';
import videoBack3 from './video/My Movie 19.mov';
import videoTab from './video/vertical tab.mp4';
import videoTab2 from './video/vertical tab.webm';
import videoTab3 from './video/vertical tab.mov';
import videoMob from './video/mob.mp4';
import videoMob2 from './video/mob.webm';
import videoMob3 from './video/mob.mov';
import './index.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const width = getWindowDimensions()

  return (
    <div className="wrapper">
      {width.width > 820 && <video src={videoBack} style={{width: 'auto', height: '100vh', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay playsInline='' loop muted >
        <source src={videoBack} type="video/mp4"></source>
        <source src={videoBack2} type="video/webm"></source>
        <source src={videoBack3} type="video/mov"></source>
      </video>}
      {(width.width < 821 && width.width > 426) && <video src={videoTab} style={{width: 'auto', height: '100vh', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay playsInline='' loop muted >
              <source src={videoTab} type="video/mp4"></source>
              <source src={videoTab2} type="video/webm"></source>
              <source src={videoTab3} type="video/mov"></source>
      </video>}
      {width.width < 426 && <video src={videoMob} style={{width: 'auto', height: '100vh', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay playsInline='' loop muted >
              <source src={videoMob} type="video/mp4"></source>
              <source src={videoMob2} type="video/webm"></source>
              <source src={videoMob3} type="video/mov"></source>
      </video>}
    </div>
  );
}

export default App;
