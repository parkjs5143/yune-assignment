type AddElementButtonProps = {
  buttonName: string;
  onClick: () => void;
};

const AlignElementButton = ({ buttonName, onClick }: AddElementButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white py-2 w-full rounded-full transition duration-200 ease-in-out hover:bg-slate-700 active:bg-slate-900 focus:outline-none"
    >
      {buttonName}
    </button>
  );
};

export default AlignElementButton;
