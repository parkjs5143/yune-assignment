export type ElementType = "p" | "div" | "span";

export interface ElementParams {
  id: number;
  type: ElementType;
  size: number;
  color: string;
}

export type AlignDirectionType = "vertical" | "horizontal";
