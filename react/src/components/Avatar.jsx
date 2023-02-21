import React from "react";

const Avatar = ({ source, size, alttext }) => {
  return (
    <>
      <img className={`${size} rounded-full`} src={source} alt={alttext} />
    </>
  );
};

export default Avatar;
