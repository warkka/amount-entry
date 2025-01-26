import React from 'react';

interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[rgba(38,237,28,1)] min-h-14 gap-2 text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap px-2.5 py-[15px] rounded-3xl"
    >
      Confirm
    </button>
  );
};