import React from "react";
import Img2 from "../../../img/h_2.jpg";
import Img3 from "../../../img/h_3.jpg";
import Img4 from "../../../img/h_4.jpg";
import Img5 from "../../../img/h_5.jpg";
import Img6 from "../../../img/h_6.jpg";
import Img7 from "../../../img/h_7.jpg";
import Img8 from "../../../img/h_8.jpg";
import Img9 from "../../../img/h_9.jpg";
import Carousel from "react-elastic-carousel";
import style from "./carousel.css";
import Box from "@material-ui/core/Box";

function SectionFive() {
  return (
    <div className="center">
      <h2>אצלכן בבית</h2>
      <div className="center">
        <Carousel
          itemsToShow={3}
          focusOnSelect={true}
          showArrows={false}
          style={style}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Box flexDirection="row" display="flex">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <Circle
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </Box>
            );
          }}
        >
          {images.map((image) => (
            <div key={image.id} style={{ width: "30em" }}>
              <img
                src={image.img}
                alt="לוכד חלומות"
                className="responsive-img"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const Circle = (props) => {
  return (
    <div className="center">
      <button
        className={props.active ? "dot" : "dot_active"}
        onClick={props.onClick}
      ></button>
    </div>
  );
};

const images = [
  {
    img: Img9,
    id: 1,
  },
  {
    img: Img8,
    id: 2,
  },
  {
    img: Img7,
    id: 3,
  },
  {
    img: Img6,
    id: 4,
  },
  {
    img: Img8,
    id: 5,
  },
  {
    img: Img5,
    id: 6,
  },
  {
    img: Img4,
    id: 7,
  },
  {
    img: Img3,
    id: 8,
  },
  {
    img: Img2,
    id: 9,
  },
];

export default SectionFive;
