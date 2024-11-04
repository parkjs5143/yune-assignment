type AddElementButtonProps = {
  buttonName: string;
  isSelected: boolean;
  onClick: () => void;
};

const AlignElementButton = ({
  buttonName,
  isSelected,
  onClick,
}: AddElementButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "text-black bg-gray-200" : "text-white bg-transparent"
      } py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none`}
    >
      {buttonName}
    </button>
  );
};

export default AlignElementButton;
