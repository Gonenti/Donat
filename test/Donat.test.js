const { expect } = require("chai");
const { ethers } = require("hardhat");
const { string } = require("hardhat/internal/core/params/argumentTypes");

describe("Donat", function (){
    it("Deposite", async function (){
        const [owner] = await ethers.getSigners();
        const Donat = await ethers.getContractFactory("Donat", owner);
        const donat = await Donat.deploy();
        await donat.deployed();


        expect(await donat.Deposit()).to.equal(0);

        shopAdress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const tx = {
            to:  shopAdress,
            value: ethers.utils.parseEther("1")

        }
        const txSend = await owner.sendTransaction(tx);
        await txSend.wait();

        expect(await donat.Deposit()).to.equal(BigInt(1000000000000000000));
    });

    it("checkDonater", async function () {
        const [owner] = await ethers.getSigners();
        const Donat = await ethers.getContractFactory("Donat", owner);
        const donat = await Donat.deploy();
        await donat.deployed();
        
        shopAdress = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
    
        const tx = {
            to:  shopAdress,
            value: ethers.utils.parseEther("1")
    
        }
          
    
        sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        notsender = "0xBcd4042DE499D14e55001CcbB24a551F3b954096";
    
        const txSend = await owner.sendTransaction(tx);
        await txSend.wait();
        expect(await donat.checkDonater(sender)).to.equal(true);
        expect(await donat.checkDonater(notsender)).to.equal(false);
        
    });

    it("getDonaterList", async function () {
        const [owner, acc2, acc3] = await ethers.getSigners();
        const Donat = await ethers.getContractFactory("Donat", owner);
        const donat = await Donat.deploy();
        await donat.deployed();
        
        shopAdress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";
    
        const tx = {
            to:  shopAdress,
            value: ethers.utils.parseEther("1")
    
        }
          
    
        ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        acc2Address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
        acc3Address = "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc";
        
    
        let txSend = await owner.sendTransaction(tx);
        await txSend.wait();

        txSend = await acc2.sendTransaction(tx);
        await txSend.wait();

        txSend = await acc3.sendTransaction(tx);
        await txSend.wait();

        
        expect(await donat.checkDonater(sender)).to.equal(true);
        expect(await donat.checkDonater(acc2Address)).to.equal(true);
        expect(await donat.checkDonater(acc3Address)).to.equal(true);
       
        
    });

    it("getDonationAmount", async function () {
        const [owner,acc2, acc3] = await ethers.getSigners();
        const Donat = await ethers.getContractFactory("Donat", owner);
        const donat = await Donat.deploy();
        await donat.deployed();
        
        shopAdress = "0x0165878a594ca255338adfa4d48449f69242eb8f";
    
        let tx = {
            to:  shopAdress,
            value: ethers.utils.parseEther("1")
    
        }
          
    
        ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        
        
        let txSend = await owner.sendTransaction(tx);
        await txSend.wait();

        tx.value = ethers.utils.parseEther("2");

        txSend = await acc2.sendTransaction(tx);
        await txSend.wait();

        tx.value = ethers.utils.parseEther("3");

        txSend = await acc3.sendTransaction(tx);
        await txSend.wait();

        
        expect(await donat.getDonationAmount(sender)).to.equal(BigInt(1000000000000000000));
        expect(await donat.getDonationAmount(acc2Address)).to.equal(BigInt(2000000000000000000));
        expect(await donat.getDonationAmount(acc3Address)).to.equal(BigInt(3000000000000000000));
       
        
    });

    it("Withdrawal", async function () {
        const [owner,acc2] = await ethers.getSigners();
        const Donat = await ethers.getContractFactory("Donat", owner);
        const donat = await Donat.deploy();
        await donat.deployed();
        
        shopAdress = "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6";
        ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        acc2Address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
    
        let tx = {
            to:  shopAdress,
            value: ethers.utils.parseEther("1")
    
        }
          
        
        let txSend = await owner.sendTransaction(tx);
        await txSend.wait();

        shopStart = await donat.Deposit();

        const acc2BalanceStart = await acc2.getBalance();
        await donat.Withdrawal(acc2Address, 10000000000);  

        const acc2BalanceFinish = await acc2.getBalance();
        div = acc2BalanceFinish - acc2BalanceStart; 
        expect(div).to.equal(9999220736);

        shopFinish = await donat.Deposit()
        
        div = shopStart - shopFinish;
        expect(div).to.equal(10000000000);
    });

});