import { create } from "zustand";
import { ElementType, ElementParams, alignType } from "@/types/types";

interface ElementsState {
  elements: ElementParams[];
  selectedIds: number[];
  groupIdCounter: number;
  alignButtonType: alignType;
  addElement: (type: ElementType) => void;
  selectElement: (id: number, multiSelect: boolean) => void;
  moveElement: (fromIndex: number, toIndex: number) => void;
  groupElements: () => void;
  ungroupElements: () => void;
  handleAlignElements: (type: alignType) => void;
}

export const useElementStore = create<ElementsState>((set) => ({
  elements: [],
  selectedIds: [],
  groupIdCounter: 1,
  alignButtonType: undefined,
  addElement: (type) =>
    set((state) => ({
      elements: [
        ...state.elements,
        {
          id: state.elements.length,
          type,
          size: Math.floor(Math.random() * 101) + 40,
          color: `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")}`,
        },
      ],
    })),
  selectElement: (id, multiSelect) =>
    set((state) => {
      if (multiSelect) {
        return {
          selectedIds: state.selectedIds.includes(id)
            ? state.selectedIds.filter((sid) => sid !== id)
            : [...state.selectedIds, id],
        };
      } else {
        return { selectedIds: state.selectedIds.includes(id) ? [] : [id] };
      }
    }),
  moveElement: (fromIndex, toIndex) =>
    set((state) => {
      const newElements = [...state.elements];
      const [fromElement] = newElements.splice(fromIndex, 1);
      newElements.splice(toIndex, 0, fromElement);
      return { elements: newElements };
    }),
  groupElements: () =>
    set((state) => {
      const newGroupId = state.groupIdCounter;
      const updatedElements = state.elements.map((el) =>
        state.selectedIds.includes(el.id) ? { ...el, groupId: newGroupId } : el
      );
      return {
        elements: updatedElements,
        groupIdCounter: state.groupIdCounter + 1,
      };
    }),
  ungroupElements: () =>
    set((state) => ({
      elements: state.elements.map((el) =>
        state.selectedIds.includes(el.id) ? { ...el, groupId: undefined } : el
      ),
    })),
  handleAlignElements: (type) =>
    set((state) => {
      if (type.includes("Group")) {
        // group 정렬
        const sortedElements = state.elements.sort((a, b) => {
          if (a.groupId === undefined) return -1;
          if (b.groupId === undefined) return 1;
          return a.groupId - b.groupId;
        });
        return { alignButtonType: type, elements: sortedElements, selectedIds: [] };
      } else {
        // group 정렬이 아닐 경우
        return { alignButtonType: type, selectedIds: [] };
      }
    }),
}));