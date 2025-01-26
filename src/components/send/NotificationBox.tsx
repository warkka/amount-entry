import React from 'react';

interface NotificationBoxProps {
  message: string;
  balance: string;
}

export const NotificationBox: React.FC<NotificationBoxProps> = ({ message, balance }) => {
  return (
    <div
      className="bg-[rgba(245,172,55,0.19)] flex min-h-[66px] gap-2 text-lg text-[rgba(237,132,28,1)] font-medium px-[9px] py-2.5 rounded-[15px]"
      role="alert"
    >
      <div className="flex w-7 shrink-0 h-7" aria-hidden="true" />
      <div>
        {message}
        <br />
        <span className="font-normal">{balance}</span>
      </div>
    </div>
  );
};