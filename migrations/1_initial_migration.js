/* eslint-disable no-undef */
const Migrations = artifacts.require('Migrations')
const DoycoinTest = artifacts.require('DoycoinTest')

module.exports = function (deployer) {
	deployer.deploy(Migrations)
	deployer.deploy(DoycoinTest, 'DoycoinTest', 'DYCT', 3, 10000000000)
}
