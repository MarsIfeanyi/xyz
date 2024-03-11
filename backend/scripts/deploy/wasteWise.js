const hre = require("hardhat");

async function main() {
  const rwasteWiseAddress = "0x1270Ae31d234C0130D965924d75fB7294706CC79";
  const Admins = [
    "0x72C90da5748739D640DEbBf19280ca51856A0177",
    "0x1698D751E54d28571785C135d0277f45b6150dB3",
    "0xbD357C7A00F91842633D41599f16425f583603B4",
    "0x177bc81B32CA4cc7D062394B181A42195D6bB451",
  ];

  // Correctly deploy the contract using getContractFactory and deploy
  const WasteWise = await hre.ethers.getContractFactory("WasteWise");
  const wasteWise = await WasteWise.deploy(rwasteWiseAddress, Admins);

  console.log("================ Deploying WasteWise ================ ");
  // Wait for the deployment to complete using deployed()
  await wasteWise.waitForDeployment();
  console.log(`WasteWise deployed to ${wasteWise.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// WasteWise deployed to 0x738cc49d9398Aea8130625677c29d74851261890
