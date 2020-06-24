import PropTypes from 'prop-types';
import React from 'react';

const Profile = ({
  target, uploader, image, id,
}) => (
  <>
    <div
      aria-hidden
      className="profileContainer"
    >
      <img className="image" src={image} alt="profileImage" />
      <div className="target">{target}</div>
      <div className="uploader">{`작성자 : ${uploader}`}</div>

      <style jsx>
        {`
          .profileContainer {
            background-color: #ffffff;
            border-radius: 46px;
            width: 247px;
            height: 336px;
            text-align: center;
            border-width: 3px;
            border-style: solid;
            border-color: #1ba0f2;
            cursor: pointer;
          }

          .image {
            border-radius: 36px;
            width: 195px;
            height: 195px;
            margin-top: 35px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
          }

          .target {
            font-size: 35px;
            margin-top: 15px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .uploader {
            font-size: 15px;
            margin-top: 10px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}
      </style>
    </div>
  </>
);

Profile.propTypes = {
  target: PropTypes.string.isRequired,
  uploader: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Profile;
