import React from "react";
import "../../Aside/Picture/picture.css";
import profilePicture from "../../../img/img-perfil.jpg";

const Picture = () => {
  return (
    <aside>
      <div>
        <img class="materialboxed" src={profilePicture} alt="profilepicture" />
      </div>
    </aside>
  );
};

export default Picture;
