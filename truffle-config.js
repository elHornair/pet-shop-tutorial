const HDWalletProvider = require("@truffle/hdwallet-provider");

// in a real world application, the mnemonic should be a secret of course
const mnemonic = "child prosper run season resist cry column kitten curve stable gentle ahead cook lesson among";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    kovan: {
      // address used for deploying the contracts: https://kovan.etherscan.io/address/0x053a969c1Cf44aacC3938D501b92c091Ef0A9389
      provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/39009bec93694f98947fdfb1cffb2e30"),
      network_id: 42
    }
  }
};
