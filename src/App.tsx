import LayerPanel from "@/components/LayerPanel/LayerPanel";
import Viewport from "@/components/Viewport/Viewport";
import useGroup from "@/hooks/useGroup";

function App() {
  useGroup(); // group, ungroup 이벤트

  return (
    <div className="min-w-full flex flex-row">
      <LayerPanel />
      <Viewport />
    </div>
  );
}

export default App;
