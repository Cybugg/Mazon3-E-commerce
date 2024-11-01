// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Mazon3 {
    address public owner;
    string public name;
    constructor(){
        owner = msg.sender;
    }

   struct Item {
    uint256 id; 
    string name; 
    string category;
    string image;
    uint256 cost;
    uint256 rating;
    uint256  stock;
   }
   mapping(uint256 => Item) public items;
   
    //  List Products
    function list(
    uint256 _id,
    string memory _name, 
    string memory _category,
    string memory _image,
    uint256 _cost,
    uint256 _rating,
    uint256  _stock
) public  {
        // Code goes here
    
        // Create Item struct
        Item memory item = Item(
            _id,
            _name,
            _category,
            _image,
            _cost,
            _rating,
            _stock
            );

        // Save Item struct to blockchain
    }
    //   Buy Products
    // Withdraw funds

}
