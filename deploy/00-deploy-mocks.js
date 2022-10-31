const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    //check if developmentchain je local OR NOT ... then deploy mocks
    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks ...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER], // these are constructors in MockV3Aggregator
        })
        log("Mocks deplyed!")
        log("----------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
