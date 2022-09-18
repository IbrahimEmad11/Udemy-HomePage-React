import React from "react";
import HCourses from "./CoursesContet/Section";
import CardList from "./CoursesContet/CardsList";
import style from "./CoursesContet/vstyle.module.css";

const Content = () => {
  return (
    <section className={`${style.courses} ${style.mSection}`}>
      <HCourses>
        <CardList></CardList>
      </HCourses>
    </section>
  );
};
export default Content;
