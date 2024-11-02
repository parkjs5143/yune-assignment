import { useCallback, useState } from "react";
import { ElementParams, ElementType } from "@/types/types";

export default function useElements() {
  const [elements, setElements] = useState<ElementParams[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const addElement = useCallback((type: ElementType) => {
    setElements((prev) => [
      ...prev,
      {
        id: prev.length,
        type,
        size: Math.floor(Math.random() * 101) + 40,
        color: `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`,
      },
    ]);
  }, []);

  const selectElement = useCallback((id: number, multiSelect: boolean) => {
    setSelectedIds((prev) => {
      if (multiSelect) {
        return prev.includes(id) ? prev : [...prev, id];
      }
      return [id];
    });
  }, []);

  const handleGrouping = useCallback((group: boolean) => {
    // 그룹핑.
  }, []);

  const handleAlignmentAll = useCallback((type: "vertical" | "horizontal") => {
    // 그냥 정렬.
  }, []);

  const handleAlignmentGroup = useCallback((type: "vertical" | "horizontal") => {
    // 그룹 정렬.
    const selectedElements = elements.filter((el) => selectedIds.includes(el.id));
    if (selectedElements.length < 2) return;

    const position = selectedElements[0].size / 2;
    const updatedElements = elements.map((el) =>
      selectedIds.includes(el.id)
        ? { ...el, size: position }
        : el
    );

    setElements(updatedElements);
  }, []);

  const moveElement = useCallback(
    (fromIndex: number, toIndex: number) => {
      setElements((prev) => {
        const newElements = [...prev];
        const [fromElement] = newElements.splice(fromIndex, 1);
        newElements.splice(toIndex, 0, fromElement);
        return newElements;
      });
    },
    [elements]
  );

  return {
    elements,
    selectedIds,
    addElement,
    selectElement,
    handleGrouping,
    handleAlignmentAll,
    handleAlignmentGroup,
    moveElement,
  };
}
