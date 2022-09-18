import React from "react";
import style from "./Cstyle.module.css";

function CourseCard(props) {
  return (
    <div className={style.Card}>
      <img src={props.course.image} alt={props.course.title}></img>
      <div className={style.CardDes}>
        <h4>{props.course.title}</h4>
        <div className={style.author}>{props.course.author}</div>
        <div className={style.ratingDiv}>
          {props.course.rating}
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        ({props.course.people})<h4>${props.course.price}</h4>
      </div>
    </div>
  );
}
export default CourseCard;
