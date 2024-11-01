const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Mazon3", () => {

  let  mazon3 ;
  let deployer, buyer;
  beforeEach(async ()=> {
    // Setup Accounts
    [deployer, buyer] = await ethers.getSigners()
   


    // Deploy Contract
    const Mazon3 = await ethers.getContractFactory("Mazon3")
    mazon3 = await Mazon3.deploy()

  })
describe("Deployment", ()=>{
  it("Sets the owner", async ()=> {
    expect(await mazon3.owner()).to.equal(deployer.address);
  })
})
  
})
