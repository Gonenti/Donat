
task("Withdrawal", "withdraws money")
.addParam("contract", "The SmartDonation contract address.")
.addParam("address", "The address to which you want to transfer money.")
.addParam("money", "The amount of money you want to transfer.")
.setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { contract, address, money } = taskArgs;
  number = Number(money);

  const smartDonationContract = await hre.ethers.getContractAt( "Donat", contract);

  const transfer = await smartDonationContract.Withdrawal(address, number);

  console.log(`transfer amount: ${money}`);
  console.log(`transfer address: ${address}`);

  })

module.exports = {}