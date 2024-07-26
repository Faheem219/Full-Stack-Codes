import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import GDSCLogo from './assets/gdsc-logo.png'; // Path to your GDSC logo image

const SplashScreen = () => {
  const [moveLogo, setMoveLogo] = useState(false);
  const [stretchShapes, setStretchShapes] = useState(false);
  const [flexDirectionChanged, setFlexDirectionChanged] = useState(false);
  const [gapChanged, setGapChanged] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const [textShow, setTextShow] = useState(false);
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const [moveOutShapes, setMoveOutShapes] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setMoveLogo(true), 1000);
    const shapesTimer = setTimeout(() => setStretchShapes(true), 2500);
    const textTimer = setTimeout(() => setTextShow(true), 4500);
    const hideLogoTimer = setTimeout(() => setHideLogo(true), 4000);
    const gapTimer = setTimeout(() => setGapChanged(true), 0);
    const flexDirectionTimer = setTimeout(() => setFlexDirectionChanged(true), 4500);
    const moveOutShapesTimer = setTimeout(() => setMoveOutShapes(true), 6500); // Adjusted delay for move-out
    const bgImageTimer = setTimeout(() => setShowBackgroundImage(true), 7000); // Add the background image after shapes move out

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(shapesTimer);
      clearTimeout(hideLogoTimer);
      clearTimeout(flexDirectionTimer);
      clearTimeout(gapTimer);
      clearTimeout(textTimer);
      clearTimeout(moveOutShapesTimer);
      clearTimeout(bgImageTimer);
    };
  }, []);

  return (
    <div className={`splash-screen ${showBackgroundImage ? 'bg-image' : ''}`}>
      <div className={`logo ${flexDirectionChanged ? 'column' : ''} ${gapChanged ? 'gap-0' : ''}`}>
        <div className={`shape red ${stretchShapes ? 'stretch' : ''} ${moveOutShapes ? 'move-out' : ''}`}>
          <span className={`text ${textShow ? 'show' : 'hide'}`}>Google</span>
        </div>
        <div className={`shape green ${stretchShapes ? 'stretch' : ''} ${moveOutShapes ? 'move-out' : ''}`}>
          <span className={`text ${textShow ? 'show' : 'hide'}`}>Developers</span>
        </div>
        <div className={`shape blue ${stretchShapes ? 'stretch' : ''} ${moveOutShapes ? 'move-out' : ''}`}>
          <span className={`text ${textShow ? 'show' : 'hide'}`}>Student</span>
        </div>
        <div className={`shape yellow ${stretchShapes ? 'stretch' : ''} ${moveOutShapes ? 'move-out' : ''}`}>
          <span className={`text ${textShow ? 'show' : 'hide'}`}>Club</span>
        </div>
      </div>
      <img
        src={GDSCLogo}
        alt="GDSC Logo"
        className={`gdsc-logo ${moveLogo ? 'move' : ''} ${hideLogo ? 'hidden' : ''}`}
      />
    </div>
  );
};

export default SplashScreen;