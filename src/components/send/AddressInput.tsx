import React from 'react';

interface AddressInputProps {
  address: string;
}

export const AddressInput: React.FC<AddressInputProps> = ({ address }) => {
  return (
    <div
      className="bg-white flex min-h-[52px] items-center gap-2 text-xl whitespace-nowrap px-2.5 py-[9px] rounded-[14px]"
      role="group"
      aria-labelledby="address-input"
    >
      <label
        id="address-input"
        className="text-[rgba(28,28,28,1)] font-normal self-stretch my-auto"
      >
        To:
      </label>
      <div className="self-stretch flex flex-col overflow-hidden text-[rgba(28,211,19,1)] font-medium my-auto">
        <div
          className="self-stretch inline-flex bg-[rgba(104,249,97,0.29)] gap-[5px] px-1.5 py-1 rounded-[13px]"
        >
          {address}
        </div>
      </div>
    </div>
  );
};