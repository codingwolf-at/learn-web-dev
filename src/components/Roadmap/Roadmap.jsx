import { useParams } from "react-router-dom";
import "./Roadmap.css";
import { BackButton, FloatingButton } from "../../components";
import { useEffect, useState } from "react";
import { roadmapList } from "../../constants/roadmapList";

export const Roadmap = () => {
  const { index } = useParams();
  const [roadmap, setRoadmap] = useState({});

  useEffect(() => {
    setRoadmap(roadmapList[Number(index)])
  }, [index]);

  return (
    <div className="roadmap-main">
      <BackButton path="/roadmaps" />
      <FloatingButton text="Scroll To Top ⬆️" />
      <span className="display-5 roadmap-heading center">{ roadmap.title }</span>
      <img src={roadmap.img} className="roadmap-img" alt="Roadmap" />
    </div>
  );
};