const batteryIsOk = require('./batteryChecker');

function runBatteryCheck(temperature, soc, charge_rate) {
    if (!isValidInput(temperature, soc, charge_rate)) {
        console.log('Invalid input values!');
        return false;
    }

    const isOk = batteryIsOk(temperature, soc, charge_rate);

    if (!isOk) {
        console.log('Battery is not okay!');
    }

    return isOk;
}

function isValidInput(temperature, soc, charge_rate) {
    return (
        !isNaN(temperature) &&
        !isNaN(soc) &&
        !isNaN(charge_rate)
    );
}

module.exports = runBatteryCheck;
