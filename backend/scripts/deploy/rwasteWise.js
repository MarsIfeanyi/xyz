const hre = require("hardhat");

async function main() {
  const rwasteWise = await hre.ethers.deployContract("RwasteWise");

  console.log(
    "================ Deploying WasteWise Receipt Token ================ "
  );
  await rwasteWise.waitForDeployment();
  console.log(`WasteWise Receipt Token deployed to ${rwasteWise.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// WasteWise Receipt Token deployed to  0x1270Ae31d234C0130D965924d75fB7294706CC79
