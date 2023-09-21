const { expect } = require('chai');
const runBatteryCheck = require('./io');

describe('Battery Check', () => {
    it('should return true for valid input values', () => {
        expect(runBatteryCheck(25, 70, 0.7)).to.be.true;
    });

    it('should return false for high temperature', () => {
        expect(runBatteryCheck(50, 70, 0.7)).to.be.false;
    });

    it('should return false for low temperature', () => {
        expect(runBatteryCheck(-1, 70, 0.7)).to.be.false;
    });

    it('should return false for high SOC', () => {
        expect(runBatteryCheck(25, 85, 0.7)).to.be.false;
    });

    it('should return false for low SOC', () => {
        expect(runBatteryCheck(25, 19, 0.7)).to.be.false;
    });

    it('should return false for high charge rate', () => {
        expect(runBatteryCheck(25, 70, 0.81)).to.be.false;
    });

    it('should return true for upper boundary values', () => {
        expect(runBatteryCheck(45, 80, 0.8)).to.be.true;
    });

    it('should return true for lower boundary values', () => {
        expect(runBatteryCheck(0, 20, 0)).to.be.true;
    });
});
