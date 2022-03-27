import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, nextPhoto, prevPhoto } from "../../store/goodsSlice";
import "./Popup.scss";

const Popap = () => {
  let { galleryPopap } = useSelector((gallery) => gallery.goodsSlice);

  console.log(galleryPopap);

  let dispatch = useDispatch();

  const hideFn = () => {
    dispatch(hide());
  };

  const next = () => {
    dispatch(nextPhoto());
  };

  const prev = () => {
    dispatch(prevPhoto());
  };

  return (
    <div className="popup-wrapper">
      <div className="popap">
        <div className="close">
          <button onClick={hideFn}>X</button>
        </div>
        <div className="wrapper-img">
          <button onClick={prev}>Prev</button>
          <div className="image">
            {galleryPopap.map((item) => (
              <img src={item} key={Math.random()} />
            ))}
          </div>
          <button onClick={next}>Next</button>
        </div>
        <div className="gallery"></div>
      </div>
    </div>
  );
};

export default Popap;
