function batteryIsOk(temperature, soc, charge_rate) {
    const isTemperatureInRange = temperature >= 0 && temperature <= 45;
    const isSOCInRange = soc >= 20 && soc <= 80;
    const isChargeRateInRange = charge_rate <= 0.8;

    const isTemperatureError = !isTemperatureInRange;
    const isSOCError = !isSOCInRange;
    const isChargeRateError = !isChargeRateInRange;

    return {
        isOk: isTemperatureInRange && isSOCInRange && isChargeRateInRange,
        errors: {
            temperature: isTemperatureError,
            soc: isSOCError,
            charge_rate: isChargeRateError,
        },
    };
}

module.exports = batteryIsOk;
