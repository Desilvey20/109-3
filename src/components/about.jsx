import "./about.css";
import { useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  const showEmail = () => {
    setVisible(true);
  };

  const hideEmail = () => {
      setVisible(false);
  };

  const getContent = () => {
    if (visible) {
      return (
        <div>
          <h6>daviddesilvey@yahoo.com</h6>
          <button onClick={hideEmail} className="btn btn-info">
            Hide Info
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>click the button below</p>
          <button onClick={showEmail} className="btn btn-primary">
            Show info
          </button>
        </div>
      );
    }
  };

  return (
    <div className="about-page">
      <h1>David De Silvey</h1>
      {getContent()}
    </div>
  );
};

export default About;
