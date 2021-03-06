const PriceConsumer = artifacts.require("PriceConsumer");

contract(
  "PriceConsumer",
  function ([deployer, wallet, investor1, investor2, investor3]) {
    describe("Price Consumer contract", function () {
      it("checks if latest round data was returned", async () => {
        const priceFeed = await PriceConsumer.new();
        let roundData = await priceFeed.getLatestPrice({ from: deployer });

        // Do something with roundData
        console.log("Latest Round Data", roundData.toString());
      });
    });
  }
);
