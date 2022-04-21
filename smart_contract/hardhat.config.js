require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/oVwtvMjdq_wmyMPhPv0EeKZn1ZaXE8kJ",
      accounts: [
        "87a621fd72aa74fe404b0d634d8a1db8b237996638397c8bc3675d3a0d140f08",
      ],
    },
  },
};
