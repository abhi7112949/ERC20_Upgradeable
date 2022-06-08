const { ethers, upgrades } = require("hardhat");

async function main() {
    const ERC20_v1 = await ethers.getContractFactory("ERC20_v1");

    console.log("Deploying ERC20_v1...");

    const erc20_v1 = await upgrades.deployProxy(ERC20_v1, {
        initializer: "initialize",
    });
    await erc20_v1.deployed();

    console.log("ERC20_v1 deployed to:", erc20_v1.address);
}

main();