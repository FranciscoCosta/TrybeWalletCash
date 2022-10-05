import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import './SocialMedia.css';

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin
          onClick={ (e) => {
            window.open('https://www.linkedin.com/in/francisco-costa-dev/', '_blank');
          } }
        />
      </div>
      <div>
        <BsGithub
          onClick={ (e) => {
            window.open('https://github.com/FranciscoCosta', '_blank');
          } }
        />
      </div>
      <div>
        <BsInstagram
          onClick={ (e) => {
            window.open('https://www.instagram.com/tuga_no_brasil/', '_blank');
          } }
        />
      </div>

    </div>
  );
}

export default SocialMedia;
