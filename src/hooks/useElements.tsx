import { useCallback, useEffect, useState } from "react";
import { ElementParams, ElementType, AlignDirectionType } from "@/types/types";

export default function useElements() {
  const [elements, setElements] = useState<ElementParams[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [groupIdCounter, setGroupIdCounter] = useState(1);

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

  const handleAlignmentAll = useCallback((type: AlignDirectionType) => {
    // 그냥 정렬.
  }, []);

  const handleAlignmentGroup = useCallback((type: AlignDirectionType) => {
    // 그룹 정렬.
    const selectedElements = elements.filter((el) =>
      selectedIds.includes(el.id)
    );
    if (selectedElements.length < 2) return;

    const position = selectedElements[0].size / 2;
    const updatedElements = elements.map((el) =>
      selectedIds.includes(el.id) ? { ...el, size: position } : el
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

  const groupElements = useCallback(() => {
    setElements((prevElements) => {
      const newGroupId = groupIdCounter;
      const updatedElements = prevElements.map((el) =>
        selectedIds.includes(el.id) ? { ...el, groupId: newGroupId } : el
      );
      return updatedElements;
    });
    setGroupIdCounter((prev) => prev + 1);
  }, [selectedIds, groupIdCounter]);

  const ungroupElements = useCallback(() => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        selectedIds.includes(el.id) ? { ...el, groupId: undefined } : el
      )
    );
  }, [selectedIds]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "g") {
        e.preventDefault();
        groupElements();
      } else if (e.ctrlKey && e.shiftKey && e.key === "G") {
        e.preventDefault();
        ungroupElements();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [groupElements, ungroupElements]);

  return {
    elements,
    selectedIds,
    addElement,
    selectElement,
    groupElements,
    ungroupElements,
    handleAlignmentAll,
    handleAlignmentGroup,
    moveElement,
  };
}
