const Migrations = artifacts.require("MelonCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
