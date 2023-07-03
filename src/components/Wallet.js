import React from "react";
import { coinbaseWallet, metaMask, walletConnectV2 } from "./connectors";

function Wallet() {
  return (
    <div>
      <button
        onClick={async () => {
          await metaMask.activate();
        }}>
        Metamask
      </button>
      <button
        onClick={async () => {
          await walletConnectV2.activate();
        }}>
        WalletConnectV2
      </button>
      <button
        onClick={async () => {
          await coinbaseWallet.activate();
        }}>
        CoinbaseWallet
      </button>
    </div>
  );
}

export default Wallet;
