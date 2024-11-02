import LayerPanel from "@/components/LayerPanel/LayerPanel";
import Viewport from "@/components/Viewport/Viewport";
import useElements from "@/hooks/useElements";

function App() {
  const {
    elements,
    selectedIds,
    addElement,
    selectElement,
    handleAlignment,
    moveElement,
  } = useElements();

  return (
    <div className="min-w-full flex flex-row">
      <LayerPanel
        elements={elements}
        selectedIds={selectedIds}
        addElement={addElement}
        selectElement={selectElement}
        handleAlignment={handleAlignment}
        moveElement={moveElement}
      />
      <Viewport
        elements={elements}
        selectedIds={selectedIds}
        selectElement={selectElement}
        moveElement={moveElement}
      />
    </div>
  );
}

export default App;
