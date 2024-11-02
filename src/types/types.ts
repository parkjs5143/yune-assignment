export type ElementType = "p" | "div" | "span";

export interface ElementParams {
  id: number;
  type: ElementType;
  size: number;
  color: string;
  groupId?: number;
}

export type AlignDirectionType = "vertical" | "horizontal";
