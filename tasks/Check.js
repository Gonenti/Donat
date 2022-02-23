
task("Check", "checks if an account has donated")
.addParam("contract", "The SmartDonation contract address.")
.addParam("address", "Account to be verified.")
.setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { contract, address } = taskArgs;

  const smartDonationContract = await hre.ethers.getContractAt( "Donat", contract);

  const flag = await smartDonationContract.checkDonater(address);

    if (flag)
    {
        console.log("This account has made donations");
    }
    else 
    {
        console.log("This account has not made any donations");
    }

  })

module.exports = {}