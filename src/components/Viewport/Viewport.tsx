import { useRef } from "react";
import { ElementParams } from "@/types/types";
import ViewportItem from "./ViewportItem/ViewportItem";
import DownloadViewportButton from "./Button/DownloadViewportButton";

type ViewportProps = {
  elements: ElementParams[];
  selectedIds: number[];
  selectElement: (id: number, isSelected: boolean) => void;
  moveElement: (fromIndex: number, toIndex: number) => void;
};

export default function Viewport({
  elements,
  selectedIds,
  selectElement,
  moveElement,
}: ViewportProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <DownloadViewportButton ref={viewportRef} />

      <section className="flex" ref={viewportRef}>
        {elements.map((el, index) => (
          <ViewportItem
            key={el.id}
            index={index}
            element={el}
            selectedIds={selectedIds}
            selectElement={selectElement}
            moveElement={moveElement}
          />
        ))}
      </section>
    </>
  );
}
