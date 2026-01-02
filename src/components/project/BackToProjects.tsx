"use client";
import { CircleChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const BackToProjects = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };
  return (
    <Button variant={"outline"} onClick={handleOnClick}>
      <CircleChevronLeft></CircleChevronLeft> Go back
    </Button>
  );
};
