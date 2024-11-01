export type ElementType = "p" | "div" | "span";

export interface ElementParams {
  id: string;
  type: ElementType;
  size: number;
  color: string;
  selected: boolean;
}
