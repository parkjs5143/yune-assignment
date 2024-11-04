export type ElementType = "p" | "div" | "span";

export type alignType =
  | "vertical"
  | "horizontal"
  | "verticalGroup"
  | "horizontalGroup";

export interface ElementParams {
  id: number;
  type: ElementType;
  size: number;
  color: string;
  groupId?: number;
}
