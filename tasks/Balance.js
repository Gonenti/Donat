
require("@nomiclabs/hardhat-web3");

task("Balance", "Get smart contract balance")
.addParam("contract", "The SmartDonation contract address.")
.setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { contract } = taskArgs;

  const smartDonationContract = await hre.ethers.getContractAt( "Donat", contract);
  
  const Balance =  await smartDonationContract.Deposit();;
  console.log(`Balance: ${Balance} WEI`);

  })

module.exports = {}