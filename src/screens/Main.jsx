import PhotoGallery from "../components/Main/PhotoGallery/PhotoGallery";
import InfoGoods from "../components/Main/InfoGoods/InfoGoods";
import { useSelector } from "react-redux";
import "../styles/Goods.scss";
import React from "react";

function Main() {
  let { goods } = useSelector((goods) => goods.goodsSlice);

  return (
    <main className="wrapperGoods">
      {goods.map((item) => {
        return (
          <div className="wrapper-goods" key={item.id}>
            <PhotoGallery
              image={item.img}
              gallery={item.gallery}
              id={item.id}
            />
            <InfoGoods
              nameGoods={item.nameGoods}
              description={item.goodsDescription}
              cost={item.cost}
              id={item.id}
              img={item.img}
              counter={item.counter}
            />
          </div>
        );
      })}
    </main>
  );
}

export default Main;
