import { useCallback, useState } from "react";
import { ElementParams, ElementType } from "../types/types";

export default function useElements() {
  const [elements, setElements] = useState<ElementParams[]>([]);

  const addElement = useCallback((type: ElementType) => {
    setElements((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type,
        size: Math.floor(Math.random() * 101) + 30,
        color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`,
        selected: false,
      },
    ]);
  }, []);

  const selectElement = useCallback((id: string, multiSelect: boolean) => {
    setElements((prev) =>
      prev.map((el) =>
        multiSelect
          ? { ...el, selected: el.selected || el.id === id }
          : { ...el, selected: el.id === id }
      )
    );
  }, []);

  return { elements, addElement, selectElement };
}
