import AddElementButton from "./Button/AddElementButton";
import AlignElementButton from "./Button/AlignElementButton";
import LayerItem from "./LayerItem/LayerItem";
import { useElementStore } from "@/stores/elementStore";

const LayerPanel = () => {
  const {
    elements,
    selectedIds,
    addElement,
    handleAlignElements,
    selectElement,
    moveElement,
  } = useElementStore();

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
            onClick={() => handleAlignElements("vertical")}
          />
          <AlignElementButton
            buttonName="All Horizontally"
            onClick={() => handleAlignElements("horizontal")}
          />
          <AlignElementButton
            buttonName="Group Vertically"
            onClick={() => handleAlignElements("verticalGroup")}
          />
          <AlignElementButton
            buttonName="Group Horizontally"
            onClick={() => handleAlignElements("horizontalGroup")}
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
