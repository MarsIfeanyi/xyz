const hre = require("hardhat");

async function main() {
  const rwasteWiseAddress = "0x1270Ae31d234C0130D965924d75fB7294706CC79";
  const wasteWiseAddress = "0x738cc49d9398Aea8130625677c29d74851261890";

  const MarketPlace = await hre.ethers.getContractFactory("MarketPlace");
  const marketPlace = await MarketPlace.deploy(
    rwasteWiseAddress,
    wasteWiseAddress
  );

  console.log("================ Deploying MarketPlace ================ ");
  await marketPlace.waitForDeployment();
  console.log(`MarketPlace deployed to ${marketPlace.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// MarketPlace deployed to 0x34F66AfFD7c24faa4785E922d34ED992Ee5C7802
