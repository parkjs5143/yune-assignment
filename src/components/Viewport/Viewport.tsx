import { useMemo, useRef } from "react";
import ViewportItem from "./ViewportItem/ViewportItem";
import DownloadViewportButton from "./Button/DownloadViewportButton";
import { useElementStore } from "@/stores/elementStore";

export default function Viewport() {
  const { elements, selectedIds, alignButtonType, selectElement, moveElement } =
    useElementStore();
  const viewportRef = useRef<HTMLDivElement>(null);

  const viewportStyle = useMemo<React.CSSProperties>(() => {
    if (alignButtonType === "vertical") {
      return { flexDirection: "column" };
    }
    if (alignButtonType === "horizontal") {
      return { flexDirection: "row" };
    }
    if (alignButtonType === "verticalGroup") {
      return { flexDirection: "column" };
    }
    if (alignButtonType === "horizontalGroup") {
      return { flexDirection: "row" };
    } else return {};
  }, [elements, alignButtonType]);

  return (
    <>
      <DownloadViewportButton ref={viewportRef} />
      <section ref={viewportRef} style={{ display: "flex", ...viewportStyle }}>
        {elements.map((el, index) => {
          return (
            <ViewportItem
              key={el.id}
              index={index}
              element={el}
              alignButtonType={alignButtonType}
              selectedIds={selectedIds}
              selectElement={selectElement}
              moveElement={moveElement}
            />
          );
        })}
      </section>
    </>
  );
}
