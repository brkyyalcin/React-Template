import React from "react";
import { useOutletContext } from "react-router-dom";
import { GetWord } from "../../../../utils";

const Teachers = () => {
  const [pageName, setPageName] = useOutletContext();
  setPageName(GetWord("Teachers"));
  return <div>Teachers</div>;
};

export default Teachers;
