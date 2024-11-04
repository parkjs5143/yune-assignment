import { useDrag, useDrop } from "react-dnd";
import { ElementParams } from "@/types/types";

const LayerItem = ({
  element,
  index,
  selectElement,
  selectedIds,
  moveElement,
}: {
  element: ElementParams;
  index: number;
  selectElement: (id: number, multiSelect: boolean) => void;
  selectedIds: number[];
  moveElement: (fromIndex: number, toIndex: number) => void;
}) => {
  const [, ref] = useDrag({
    type: "LAYER",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "LAYER",
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveElement(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <li
      ref={(node) => ref(drop(node))}
      onClick={(e) => selectElement(element.id, e.shiftKey)}
      className={`p-1 text-center cursor-pointer
                w-full py-2 rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none ${
                  selectedIds.includes(element.id)
                    ? "text-black bg-gray-200"
                    : "text-white bg-transparent"
                }`}
    >
      {element.type}
    </li>
  );
};

export default LayerItem;
