import { data } from "../data";
import StudyCard from "./StudyCard";

export default function StudyList() {
  return (
    <div id="card-wrapper">
      {data.map((study, index) => {
        return <StudyCard key={index} {...study} index={index} />;
      })}
    </div>
  );
}
