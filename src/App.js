import React from "react";
import videoBack from './video/My Movie 19.mp4';
import videoTab from './video/vertical tab.mp4';
import videoMob from './video/mob.mp4';
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



  console.log('width', width)

  return (
    <div className="wrapper">
      {width.width > 820 && <video src={videoBack} style={{width: '100%', height: '100%', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay loop muted />}
      {(width.width < 821 && width.width > 426) && <video src={videoTab} style={{width: 'auto', height: '100vh', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay loop muted />}
      {width.width < 426 && <video src={videoMob} style={{width: 'auto', height: '100vh', top: 0, right: 0, bottom: 0, letf: 0}} autoPlay loop muted />}
    </div>
  );
}

export default App;
