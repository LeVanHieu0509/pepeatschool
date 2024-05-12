import React from "react";
import { HeaderCourseWrapper } from "./styled";

interface HeaderCourseProps {}

const HeaderCourse = ({}: HeaderCourseProps) => {
  return (
    <HeaderCourseWrapper>
      <div className="max-w-screen-lg mx-auto pt-4 pb-8 border-b border-gray-400 border-opacity-20 text-center">
        <h1>
          <span className="font-bold leading-tight lg:text-5xl">
            Khoá học của Pepe at school
          </span>
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 font-space-grotesk">
          Cần dùng đồng token pepe để sở hữu mã code khoá học
        </p>
      </div>
    </HeaderCourseWrapper>
  );
};

export default HeaderCourse;
