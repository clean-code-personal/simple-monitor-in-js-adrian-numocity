function batteryIsOk(temperature, soc, charge_rate) {
    const isTemperatureInRange = temperature >= 0 && temperature <= 45;
    const isSOCInRange = soc >= 20 && soc <= 80;
    const isChargeRateInRange = charge_rate <= 0.8;

    return isTemperatureInRange && isSOCInRange && isChargeRateInRange;
}

module.exports = batteryIsOk;
