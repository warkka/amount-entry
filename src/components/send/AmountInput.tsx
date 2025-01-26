import React from 'react';

interface AmountInputProps {
  amount: string;
  onMaxClick: () => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ amount, onMaxClick }) => {
  return (
    <div
      className="bg-white flex w-full items-center font-medium whitespace-nowrap justify-between p-5 rounded-[36px]"
    >
      <div
        className="text-[rgba(28,28,28,1)] text-4xl self-stretch flex-1 shrink basis-5 my-auto"
      >
        {amount}|
      </div>
      <button
        onClick={onMaxClick}
        className="self-stretch bg-[rgba(104,249,97,0.29)] gap-[5px] text-xl text-[rgba(28,211,19,1)] my-auto px-2.5 py-1 rounded-[13px]"
      >
        Max
      </button>
    </div>
  );
};