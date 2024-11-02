import { ElementParams, ElementType, AlignDirectionType } from "@/types/types";
import AddElementButton from "./Button/AddElementButton";
import AlignElementButton from "./Button/AlignElementButton";
import LayerItem from "./LayerItem/LayerItem";

type LayerPanelProps = {
  elements: ElementParams[];
  selectedIds: number[];
  addElement: (type: ElementType) => void;
  selectElement: (id: number, isSelected: boolean) => void;
  handleGrouping: (group: boolean) => void;
  handleAlignmentAll: (type: AlignDirectionType) => void;
  handleAlignmentGroup: (type: AlignDirectionType) => void;
  moveElement: (fromIndex: number, toIndex: number) => void;
};

const LayerPanel = ({
  elements,
  selectedIds,
  addElement,
  selectElement,
  handleGrouping,
  handleAlignmentAll,
  handleAlignmentGroup,
  moveElement,
}: LayerPanelProps) => {
  return (
    <section className="bg-gray-800">
      {/* Add Buttons */}
      <div className="px-2 py-5 border-b-[1px] border-white">
        <p className="text-white font-bold text-center mb-3">Add</p>
        <div className="w-fit flex gap-3">
          <AddElementButton type="div" onClick={() => addElement("div")} />
          <AddElementButton type="span" onClick={() => addElement("span")} />
          <AddElementButton type="p" onClick={() => addElement("p")} />
        </div>
      </div>

      {/* Align Buttons */}
      <div className="px-2 py-5 border-b-[1px] border-white">
        <p className="text-white font-bold text-center mb-3">Align</p>
        <div className="flex flex-col items-center">
          <AlignElementButton
            buttonName="All Vertically"
            onClick={() => handleAlignmentAll("vertical")}
          />
          <AlignElementButton
            buttonName="All Horizontally"
            onClick={() => handleAlignmentAll("horizontal")}
          />
          <AlignElementButton
            buttonName="Group Vertically"
            onClick={() => handleAlignmentGroup("vertical")}
          />
          <AlignElementButton
            buttonName="Group Horizontally"
            onClick={() => handleAlignmentGroup("horizontal")}
          />
        </div>
      </div>

      {/* Layer */}
      <div className="px-2 py-5">
        <p className="text-white font-bold text-center mb-3">Layer</p>
        <ul>
          {elements.map((el, index) => (
            <LayerItem
              key={el.id}
              index={index}
              element={el}
              selectedIds={selectedIds}
              selectElement={selectElement}
              moveElement={moveElement}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LayerPanel;
