import React from 'react';
import { useState } from 'react';

const WhiteGithubIcon = () => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="white-github"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {/*Still figuring out how to separate this social media into component */}
      {isHovering ? (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/agas77"
          >
            <img
              src="/images/linked-black.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/raybagas7"
          >
            <img
              src="/images/github.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/channel/UC4h364WrK4bSM1Mt8ZKTAOw"
          >
            <img
              src="/images/youtube-black.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
        </>
      ) : (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/agas77"
          >
            <img
              src="/images/linked-white.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/raybagas7"
          >
            <img
              src="/images/githubwhite.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/channel/UC4h364WrK4bSM1Mt8ZKTAOw"
          >
            <img
              src="/images/youtube-white.png"
              className="image-hover__github"
              alt="github"
            />
          </a>
        </>
      )}
    </div>
  );
};

export default WhiteGithubIcon;
