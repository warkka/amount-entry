import React from 'react';
import { AddressInput } from './AddressInput';
import { AccountSelector } from './AccountSelector';
import { AmountInput } from './AmountInput';
import { NotificationBox } from './NotificationBox';
import { SendButton } from './SendButton';

export const SendContainer: React.FC = () => {
  const handleMaxClick = () => {
    // Implement max amount logic
  };

  const handleSend = () => {
    // Implement send logic
  };

  return (
    <div
      className="bg-[rgba(245,245,247,1)] flex max-w-[393px] flex-col overflow-hidden pl-5 pt-5 pb-[321px] rounded-[24px_24px_0px_0px]"
    >
      <header
        className="flex items-center justify-center text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap relative"
      >
        <div className="absolute left-0 w-8 h-8" />
        <h1>Send</h1>
      </header>

      <main className="flex flex-col gap-4 mt-4">
        <AddressInput address="apkuzmin.eth" />
        <AccountSelector />
        <AmountInput amount="$100" onMaxClick={handleMaxClick} />
        <NotificationBox
          message="We'll use $15 from Savings"
          balance="Dollar savings balance: $37,000"
        />
        <SendButton onClick={handleSend} />
      </main>
    </div>
  );
};