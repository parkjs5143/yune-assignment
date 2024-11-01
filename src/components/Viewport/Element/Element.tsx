import { ElementType } from "../../../types/types";

const Element = (props: React.HTMLAttributes<HTMLElement> & {
  type: ElementType;
}) => {
  if (props.type === "div") {
    return <div {...props}>{props.type}</div>;
  }
  if (props.type === "span") {
    return <span {...props}>{props.type}</span>;
  }
  if (props.type === "p") {
    return <p {...props}>{props.type}</p>;
  }
};

export default Element;
