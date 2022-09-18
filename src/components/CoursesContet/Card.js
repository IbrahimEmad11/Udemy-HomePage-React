import React from "react";
import style from "./Cstyle.module.css";

function CourseCard(props) {
  return (
    <div className={style.Card}>
      <img src={props.course.image} alt={props.course.title}></img>
      <div className={style.courseDes}>
        <h4>{props.course.title}</h4>
        <div className={style.instructor}>{props.course.instructor}</div>
        <div className={style.ratingdiv}>
          {props.course.ratingdiv}
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        ({props.course.views})<h4>${props.course.price}</h4>
      </div>
    </div>
  );
}
export default CourseCard;
