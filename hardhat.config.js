require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    //solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.6.6" }, { version: "0.8.8" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true, //ano bude spusten = true
        outputFile: "gas-report.txt", //vystup do souboru
        noColors: true, //vystup bez barev
        currency: "USD", // v dolarech
        coinmarketcap: COINMARKETCAP_API_KEY, // pro cenu v dolarech potrebujeme napr. API COINMARKETCAPU/chainlinku
        token: "ETH", // kolik by to stalo na siti MATIC
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
