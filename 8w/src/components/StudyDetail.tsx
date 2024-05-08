import { useParams } from "react-router-dom";
import { data } from "../data";

export default function StudyDetail() {
  const index = Number(useParams().index);
  const study = data[index];
  return (
    <main>
      <img src={study.imageSrc} alt={study.title} width={300} />
      <h1>{study.title}</h1>
      <div id="info-wrapper">
        <p>📚 {study.level}</p>
        <p>🏢 {study.campus}</p>
        <p>👤 {study.mentor}</p>
        <p>🔧 {study.stack.join(", ")}</p>
      </div>
      <p id="description">{study.description}</p>
    </main>
  );
}
