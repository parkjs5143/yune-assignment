import { ElementParams, ElementType } from "../../types/types";
import AddElementButton from "./Button/AddElementButton";

type LayerPanelProps = {
  elements: ElementParams[];
  addElement: (type: ElementType) => void;
  selectElement: (id: string, isSelected: boolean) => void;
};

const LayerPanel = ({
  elements,
  addElement,
  selectElement,
}: LayerPanelProps) => {
  return (
    <section className="bg-gray-800">
      {/* Add Buttons */}
      <div className="px-2 py-5 border-b-[1px] border-white">
        <p className="text-white font-bold text-center mb-3">Add</p>
        <div className="w-fit flex gap-3">
          <AddElementButton type="div" addElement={addElement} />
          <AddElementButton type="span" addElement={addElement} />
          <AddElementButton type="p" addElement={addElement} />
        </div>
      </div>

      {/* Align Buttons */}
      <div className="px-2 py-5 border-b-[1px] border-white">
        <p className="text-white font-bold text-center mb-3">Align</p>
        <div className="flex flex-col items-center">
          <button className="text-white py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none">
            All Vertically
          </button>
          <button className="text-white py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none">
            All Horizontally
          </button>
          <button className="text-white py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none">
            Group Vertically
          </button>
          <button className="text-white py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none">
            Group Horizontally
          </button>
        </div>
      </div>

      {/* Layer */}
      <div className="px-2 py-5">
        <p className="text-white font-bold text-center mb-3">Layer</p>
        <ul>
          {elements.map((el) => (
            <li
              key={el.id}
              onClick={(e) => selectElement(el.id, e.shiftKey)}
              className={`p-1 text-center cursor-pointer
                text-white w-full py-2 rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none ${
                  el.selected
                    ? "text-black bg-gray-200"
                    : "text-white bg-transparent"
                }`}
            >
              {el.type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LayerPanel;
