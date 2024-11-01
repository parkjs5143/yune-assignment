import LayerPanel from "./components/LayerPanel/LayerPanel";
import Viewport from "./components/Viewport/Viewport";
import useElements from "./hooks/useElements";

function App() {
  const { elements, addElement, selectElement } = useElements();

  return (
    <div className="min-w-full flex flex-row">
      <LayerPanel
        elements={elements}
        addElement={addElement}
        selectElement={selectElement}
      />
      <Viewport elements={elements} selectElement={selectElement} />
    </div>
  );
}

export default App;
