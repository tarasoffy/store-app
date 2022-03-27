import React from "react";
import { useDispatch } from "react-redux";
import "../Main.scss";
import { show } from "../../../store/goodsSlice";

function PhotoGallery({ image, id }) {
  let dispatch = useDispatch();

  const showPopap = () => {
    dispatch(show(id));
  };

  return (
    <div className="photo-gallery">
      <img onClick={showPopap} src={image} alt="sneakers" />
    </div>
  );
}

export default PhotoGallery;
