const { expect } = require("chai");

// Convert int to thers unit
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
}

const ID = 1;
const NAME = "Shoes";
const CATEGORY = "Clothing";
const IMAGE = "https://ipfs.io/ipfs/";
const COST = tokens(1);
const RATING = 4;
const STOCK =5 ;

describe("Mazon3", () => {

  let  mazon3 ;
  let deployer, buyer;
  beforeEach(async ()=> {
    // Setup Accounts
    [deployer, buyer] = await ethers.getSigners();
   


    // Deploy Contract
    const Mazon3 = await ethers.getContractFactory("Mazon3");
    mazon3 = await Mazon3.deploy();

  })

describe("Deployment", ()=>{
  it("Sets the owner", async ()=> {
    expect(await mazon3.owner()).to.equal(deployer.address);
  })
})

describe("Listing", ()=>{
  let transaction;


  beforeEach(async ()=> {
   transaction = await mazon3.connect(deployer).list(
      ID,
      NAME,
      CATEGORY,
      IMAGE,
      COST,
      RATING,
      STOCK
    )
    await transaction.wait();
  })

  it("Returns item attributes", async ()=> {
    const item = await mazon3.items(ID);
    expect(item.id).to.equal(ID);
    expect(item.name).to.equal(NAME);
    expect(item.category).to.equal(CATEGORY);
    expect(item.image).to.equal(IMAGE);
    expect(item.cost).to.equal(COST);
    expect(item.rating).to.equal(RATING);
    expect(item.stock).to.equal(STOCK);
  })
  it("Emits List event", () => {
    expect(transaction).to.emit(mazon3, "List")
  })
})
})
