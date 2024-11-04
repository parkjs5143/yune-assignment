import { useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { alignType, ElementParams } from "@/types/types";

type ViewportItemProps = {
  index: number;
  element: ElementParams;
  selectedIds: number[];
  alignButtonType: alignType;
  selectElement: (id: number, isSelected: boolean) => void;
  moveElement: (fromIndex: number, toIndex: number) => void;
};

const ViewportItem = ({
  index,
  element,
  selectedIds,
  alignButtonType,
  selectElement,
  moveElement,
}: ViewportItemProps) => {
  const [, ref] = useDrag({
    type: "ELEMENT",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ELEMENT",
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveElement(item.index, index);
        item.index = index;
      }
    },
  });

  const props = useMemo(() => {
    const groupId = element.groupId ?? 0;

    return {
      onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        selectElement(element.id, e.shiftKey),
      style: {
        position: "relative",
        width: element.size,
        height: element.size,
        backgroundColor: element.color,
        left: alignButtonType === "verticalGroup" ? 20 * groupId : 0,
        top: alignButtonType === "horizontalGroup" ? 20 * groupId : 0,
        border: selectedIds.includes(element.id) ? "solid 2px black" : "none",
      } as React.CSSProperties,
    };
  }, [element, selectedIds, alignButtonType, selectElement]);

  if (element.type === "div") {
    return (
      <div ref={(node) => ref(drop(node))} {...props}>
        {element.type}
      </div>
    );
  }
  if (element.type === "span") {
    return (
      <span ref={(node) => ref(drop(node))} {...props}>
        {element.type}
      </span>
    );
  }
  if (element.type === "p") {
    return (
      <p ref={(node) => ref(drop(node))} {...props}>
        {element.type}
      </p>
    );
  }
};

export default ViewportItem;
