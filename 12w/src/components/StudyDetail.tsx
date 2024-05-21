import { useParams } from "react-router-dom";
import { FaSchoolFlag } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiStackOverflowLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import type { Study } from "@/types";
import { Oval } from "react-loader-spinner";

export default function StudyDetail() {
  const [study, setStudy] = useState<Study>();
  const { index } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://getstudy-he4kudccka-uc.a.run.app/${index}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((res) => {
          setStudy(res);
        })
        .catch((error) => console.error("Fetch error:", error));
    }, 500);
  }, [index]);

  return (
    <main className="flex flex-col items-center pt-8">
      {study ? (
        <div className="flex flex-col items-center gap-6">
          <img src={study!.imageSrc} alt={study!.title} width={300} />
          <p className="text-3xl font-bold text-center">{study!.title}</p>
          <div>
            <div className="flex gap-2 text-lg font-semibold items-center">
              <MdOutlineSignalCellularAlt /> {study!.level}
            </div>
            <div className="flex gap-2 text-lg font-semibold items-center">
              <FaSchoolFlag /> {study!.campus}
            </div>
            <div className="flex gap-2 text-lg font-semibold items-center">
              <IoPersonSharp /> {study!.mentor}
            </div>
            <div className="flex gap-2 text-lg font-semibold items-center">
              <RiStackOverflowLine /> {study!.stack.join(", ")}
            </div>
          </div>
          <p className="max-w-96 text">{study!.description}</p>{" "}
        </div>
      ) : (
        <div className="mt-48">
          <Oval color="#3B82F6" height={100} width={100} />
        </div>
      )}
    </main>
  );
}
