import { ElementType } from "@/types/types";

type AddElementButtonProps = {
  type: ElementType;
  onClick: () => void;
};

const AddElementButton = ({
  type,
  onClick,
}: AddElementButtonProps) => {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white duration-200 ease-in-out hover:bg-slate-500 active:bg-slate-900 focus:outline-none"
      onClick={onClick}
    >
      {type}
    </button>
  );
}

export default AddElementButton