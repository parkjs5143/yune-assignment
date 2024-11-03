import { useEffect } from "react";
import { useElementStore } from "@/stores/elementStore";

export default function useGroup() {
  const { groupElements, ungroupElements } = useElementStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isG = e.key === "g" || e.key === "G" || e.key === "ㅎ";

      if (e.ctrlKey && isG) {
        e.preventDefault();
        groupElements();
      }
      if (e.ctrlKey && e.shiftKey && isG) {
        e.preventDefault();
        ungroupElements();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [groupElements, ungroupElements]);
}
