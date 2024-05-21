import { useState } from "react";
import type { Study } from "@/types";
import { Button } from "./ui/button";

export default function CampusFilter({
  data,
  onChange,
}: {
  data: Study[];
  onChange: (data: Study[]) => void;
}) {
  const [currentCampus, setCurrentCampus] = useState<string>("전체");
  const campus = ["공통", "율전", "명륜", "온라인"];
  return (
    <div className="flex gap-6">
      <Button
        variant={currentCampus === "전체" ? "default" : "secondary"}
        onClick={() => {
          onChange(data);
          setCurrentCampus("전체");
        }}
      >
        전체
      </Button>
      {campus.map((campus) => {
        return (
          <Button
            key={campus}
            variant={currentCampus === campus ? "default" : "secondary"}
            onClick={() => {
              onChange(data.filter((study) => study.campus === campus));
              setCurrentCampus(campus);
            }}
          >
            {campus}
          </Button>
        );
      })}
    </div>
  );
}
