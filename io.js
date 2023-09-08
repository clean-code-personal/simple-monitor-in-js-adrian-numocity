const batteryIsOk = require('./batteryChecker');

function runBatteryCheck(temperature, soc, charge_rate) {
    const batteryStatus = batteryIsOk(temperature, soc, charge_rate);

    if (!batteryStatus.isOk) {
        if (batteryStatus.errors.temperature) {
            console.log('Temperature is out of range!');
        }
        if (batteryStatus.errors.soc) {
            console.log('State of Charge is out of range!');
        }
        if (batteryStatus.errors.charge_rate) {
            console.log('Charge rate is out of range!');
        }

        return false;
    }

    return true;
}

module.exports = runBatteryCheck;
