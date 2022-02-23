
task("Donater list", "Get donater list")
.addParam("contract", "The SmartDonation contract address.")
.setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { contract } = taskArgs;

  const smartDonationContract = await hre.ethers.getContractAt( "Donat", contract);

  const donaterList = await smartDonationContract.getDonaterList();
  
  console.log(donaterList);
  

  })

module.exports = {}