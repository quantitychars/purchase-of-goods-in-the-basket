import React from "react";
export default function Toast({ message = "", onClose }) {
  React.useEffect(() => {
    const t = setTimeout(onClose, 1500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
      {message}
    </div>
  );
}
