require("@nomicfoundation/hardhat-toolbox");

// NEVER record important private keys in your code - this is for demo purposes
const BOTANIX_TESTNET_PRIVATE_KEY = "242982";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    botanixTestnet: {
      url: "https://node.botanixlabs.dev",
      chainId: 3636,
      accounts: [BOTANIX_TESTNET_PRIVATE_KEY],
    },
  },
};
