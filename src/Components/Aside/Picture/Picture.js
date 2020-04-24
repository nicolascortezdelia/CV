import React from "react";
import "../../Aside/Picture/picture.css";
import profilePicture from "../../../img/img-perfil.jpg";

const Picture = () => {
  return (
    <aside>
      <div>
        <img src={profilePicture} alt="profilepicture" />
      </div>
    </aside>
  );
};

export default Picture;
