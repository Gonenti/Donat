pragma solidity 0.8.4;

import 'hardhat/console.sol';

/**
 * @title Smart Donation
 * 
 * @dev Smart contract for donation.

 */
contract Donat {
    address public owner;
    address public shopAdress;
    mapping(address => uint) Donater;
    address[] Donaterlist;

    constructor() {
        owner = msg.sender;
        shopAdress = address(this);
        console.log(address(this));
    }

    function Deposit() public view returns (uint) {
        return shopAdress.balance; 
    }


    /**
    * @param _donater account to be verified
    */
    function checkDonater(address _donater) public view returns(bool){

        bool checkFlag = false;

        for (uint i = 0; i < Donaterlist.length; i++){
            if (Donaterlist[i] == _donater){
                checkFlag =  true;
            }
        }
        return checkFlag;
        
    }

    function getDonaterList() external view returns(address[] memory) {
        return Donaterlist;
    }

    /**
    * @param _donater account whose donation amount we want to know
    */
    function getDonationAmount(address _donater) external view returns(uint){
        return Donater[_donater];
    }


    /**
    * @param _to account to which we want to transfer money
    * @param _money the amount we want to transfer
    */

    function Withdrawal(address payable _to, uint _money) external payable {
        require(owner == msg.sender, "Sorry, but you are not the owner :)");
        _to.transfer(_money);
    }

    receive() external payable {
        Donater[msg.sender] += msg.value;
        if (!checkDonater(msg.sender))
        {
            Donaterlist.push(msg.sender);
        }
    }
    //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {
}