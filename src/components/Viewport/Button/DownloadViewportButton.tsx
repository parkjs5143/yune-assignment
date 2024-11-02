import { toPng } from "html-to-image";
import { forwardRef, useCallback } from "react";

const DownloadViewportButton = forwardRef<HTMLDivElement>((_, ref) => {
  const downloadImage = useCallback(async () => {
    if (ref && "current" in ref && ref.current) {
      try {
        const dataUrl = await toPng(ref.current, { cacheBust: true });
        const link = document.createElement("a");
        link.download = "Download Viewport.png";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.log(error);
      }
    }
  }, [ref]);

  return (
    <button
      className="fixed bottom-4 right-4 cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-100 duration-500 hover:ring-1 font-mono w-[140px]"
      onClick={downloadImage}
    >
      Download
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        ></path>
      </svg>
    </button>
  );
});

export default DownloadViewportButton;
