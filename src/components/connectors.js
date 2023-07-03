import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";

export const [metaMask, metaMaskHooks] = initializeConnector(
  (actions) => new MetaMask({ actions })
);

export const [walletConnectV2, walletConnectV2Hooks] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "bddf10a62a5a9b248254d1cdab51f24c",
        chains: [5],
        showQrModal: true,
      },
    })
);

export const [coinbaseWallet, coinbaseWalletHooks] = initializeConnector(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: "https://goerli.infura.io/v3/8cdc50117e274b61b9e4fbf46cbc5a88",
        appName: "web3-react-demo",
      },
    })
);
