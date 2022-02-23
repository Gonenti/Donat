
task("Get donation amount", "Amount contributed by the account")
.addParam("contract", "The SmartDonation contract address.")
.addParam("address", "The address that make the donation.")
.setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { contract, address } = taskArgs;

  console.log(`Donating from ${address}...`);

  const smartDonationContract = await hre.ethers.getContractAt( "Donat", contract);

  const donat = await smartDonationContract.getDonationAmount(address);

  console.log(`the donater sent: ${donat} WEI`);

  })

module.exports = {}