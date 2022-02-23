const hre = require("hardhat");
const ethers = hre.ethers

async function main() {
    const [signer] = await ethers.getSigners()

    const Donat = await ethers.getContractFactory("Donat", signer)
    const donat = await Donat.deploy()

    await donat.deployed();
    console.log(donat.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });