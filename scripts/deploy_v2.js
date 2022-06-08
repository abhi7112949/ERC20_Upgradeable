const { ethers, upgrades } = require("hardhat");

const PROXY = "0x553A7f046c56Be4ab8b8Fd44dE0b1ACeE9f98493";

async function main() {
    const ERC20_v2 = await ethers.getContractFactory("ERC20_v2");
    console.log("Upgrading to ERC20_v2...");
    await upgrades.upgradeProxy(PROXY, ERC20_v2);
    console.log("ERC20_v2 upgraded successfully");
}

main();