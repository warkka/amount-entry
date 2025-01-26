import React from 'react';

interface Account {
  name: string;
  balance: string;
  isActive?: boolean;
}

export const AccountSelector: React.FC = () => {
  return (
    <div className="self-stretch flex w-full flex-col items-stretch">
      <div className="flex w-full items-center gap-2">
        <div
          className="bg-white self-stretch flex min-w-60 min-h-16 w-[355px] items-center text-lg justify-between my-auto px-2.5 py-2 rounded-[20px]"
        >
          <div
            className="self-stretch flex min-w-60 w-full items-center gap-4 flex-1 shrink basis-[0%] my-auto"
          >
            <div
              className="bg-[rgba(38,237,28,1)] self-stretch flex w-12 shrink-0 h-12 my-auto rounded-[5000px]"
              aria-hidden="true"
            />
            <div
              className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto"
            >
              <div className="text-[rgba(28,28,28,1)] font-medium">
                from Dollars
              </div>
              <div className="text-[rgba(143,143,143,1)] font-normal">
                $15,666
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white self-stretch flex min-h-16 items-center justify-between w-[318px] my-auto pl-2.5 py-2 rounded-[20px]"
        >
          <div className="self-stretch flex w-full items-center gap-4 flex-1 shrink basis-[0%] my-auto">
            <div
              className="bg-[rgba(38,237,28,1)] self-stretch flex min-h-12 w-12 my-auto rounded-[5000px]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="self-center flex items-center gap-[5px] mt-2">
        <div className="bg-[rgba(38,237,28,1)] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%]" />
        <div className="bg-[rgba(141,141,141,1)] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%]" />
      </div>
    </div>
  );
};