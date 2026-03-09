import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialTooltip = () => {
  return (
    <StyledWrapper>
      <ul className="social-container">

        <li className="icon-content">
          <a
            href="https://github.com/Manav948"
            target="_blank" 
            rel="noopener noreferrer"
            className="link"
            data-social="github"
          >
            <FaGithub />
          </a>
          <div className="tooltip">GitHub</div>
        </li>

        <li className="icon-content">
          <a
            href="https://www.linkedin.com/in/manavvalani/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            data-social="linkedin"
          >
            <FaLinkedin />
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>

        <li className="icon-content">
          <a
            href="https://x.com/ManavValani"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            data-social="twitter"
          >
            <FaTwitter />
          </a>
          <div className="tooltip">Twitter</div>
        </li>

        <li className="icon-content">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            data-social="instagram"
          >
            <FaInstagram />
          </a>
          <div className="tooltip">Instagram</div>
        </li>

      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .social-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .icon-content {
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    color: #000;
    padding: 5px 8px;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s;
  }

  .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -45px;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #0f1117;
    color: white;
    font-size: 20px;
    transition: 0.25s;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .link:hover {
    transform: translateY(-4px);
  }

  .link[data-social="github"]:hover {
    color: #ffffff;
  }

  .link[data-social="linkedin"]:hover {
    color: #0a66c2;
  }

  .link[data-social="twitter"]:hover {
    color: #1da1f2;
  }

  .link[data-social="instagram"]:hover {
    color: #ff2d55;
  }
`;

export default SocialTooltip;