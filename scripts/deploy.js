async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const NFT = await hre.ethers.getContractFactory("CryptoToken");
  const nft = await NFT.deploy("Crypto Token", "CTK");

  // await nft.deployed();

  console.log("CryptoToken deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });