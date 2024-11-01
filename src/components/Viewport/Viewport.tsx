import { useRef } from "react";
import { ElementParams } from "../../types/types";
import Element from "./Element/Element";
import DownloadViewportButton from "./Button/DownloadViewportButton";

type ViewportProps = {
  elements: ElementParams[];
  selectElement: (id: string, isSelected: boolean) => void;
};

export default function Viewport({ elements, selectElement }: ViewportProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <DownloadViewportButton ref={viewportRef} />

      <section className="flex" ref={viewportRef}>
        {elements.map((el) => (
          <Element
            type={el.type}
            key={el.id}
            onClick={(e) => selectElement(el.id, e.shiftKey)}
            style={{
              width: el.size,
              height: el.size,
              backgroundColor: el.color,
              border: el.selected ? "solid 2px black" : "none",
            }}
          />
        ))}
      </section>
    </>
  );
}
