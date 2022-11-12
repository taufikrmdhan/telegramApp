import React from "react";
import '../assets/style.css';

const Index = () => {
  return (
    <div>
      {/* image splashscreen */}
      <div className="customSplash bg-light">
        <img src={require("../assets/image/splash.png")} alt="splash" border="0" className="imgSplashCenter"/>
      </div>
    </div>
  );
};
export default Index;
