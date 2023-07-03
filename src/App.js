import React from "react";
import Wallet from "./components/Wallet";
import HookCounter from "./components/HookCounter";
import { Web3ReactProvider } from "@web3-react/core";
import { coinbaseWallet, coinbaseWalletHooks, metaMask, metaMaskHooks, walletConnectV2, walletConnectV2Hooks } from "./components/connectors";

const App = () => {
  const connectors = [
    [metaMask, metaMaskHooks],
    [walletConnectV2, walletConnectV2Hooks],
    [coinbaseWallet, coinbaseWalletHooks]
  ];
  return (
    <Web3ReactProvider connectors={connectors}>
      <Wallet />
      <HookCounter />
    </Web3ReactProvider>
  );
};
export default App;
