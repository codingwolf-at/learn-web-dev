import "./Roadmaps.css";
import frontendImg from "../../assets/frontend.jpg";
import reactImg from "../../assets/react.jpg";
import angularImg from "../../assets/angular.jpg";
import devopsImg from "../../assets/devops.jpg";

export const Roadmaps = () => {
  return (
    <main className='roadmaps-main'>
      <span className="display-3 roadmap-heading">Roadmaps</span>
      <span className="display-5">Frontend</span>
      <img src={frontendImg} className="roadmap-img" alt="" />
      <span className="display-5">React</span>
      <img src={reactImg} className="roadmap-img" alt="" />
      <span className="display-5">Angular</span>
      <img src={angularImg} className="roadmap-img" alt="" />
      <span className="display-5">Devops</span>
      <img src={devopsImg} className="roadmap-img" alt="" />
    </main>
  )
}