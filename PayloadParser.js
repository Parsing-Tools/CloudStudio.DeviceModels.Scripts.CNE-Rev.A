function parseUplink(device, payload) {
    let mappingCNE = {
        "latitude": "LATITUDE",
        "lin1.value": "VALVE_STATUS",
        "lin10.value": "LAST_SHUT_IN_HOUR",
        "lin11.value": "SHUT_IN_CLOSING_TIME",
        "lin12.value": "SHUT_IN_OPENING_TIME",
        "lin13.value": "SHUT_IN_OPENING_PRE",
        "lin14.value": "SHUT_IN_MIN_CLOSED_VALVE_TIME",
        "lin15.value": "SHUT_IN_MAX_CLOSED_VALVE_TIME",
        "lin16.value": "SHUT_IN_MIN_OPEN_VALVE_TIME",
        "lin17.value": "SHUT_IN_MAX_OPEN_VALVE_TIME",
        "lin18.value": "MAINT_CYCLES_OPENING_MODE",
        "lin19.value": "MAINT_CYCLES_CLOSING_MODE",
        "lin2.value": "CLOSED_VALVE_TIME_COUNTER",
        "lin20.value": "MAINT_CYCLES_CLOSING_TIME",
        "lin21.value": "MAINT_CYCLES_OPENING_TIME",
        "lin22.value": "MAINT_CYCLES_OPENING_PRE",
        "lin23.value": "MAX_PRE_TO_OPEN",
        "lin24.value": "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME",
        "lin25.value": "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME",
        "lin26.value": "MAINT_CYCLES_MIN_OPEN_VALVE_TIME",
        "lin27.value": "MAINT_CYCLES_MAX_OPEN_VALVE_TIME",
        "lin28.value": "WHP",
        "lin29.value": "LP",
        "lin3.value": "OPEN_VALVE_TIME_COUNTER",
        "lin30.value": "WHT",
        "lin31.value": "UPSTREAM_PRE",
        "lin32.value": "FLOW_REGIME",
        "lin33.value": "FLOW_TYPE",
        "lin34.value": "SHUT_IN_MIN_TURNER",
        "lin35.value": "MAINT_CYCLES_MIN_TURNER",
        "lin36.value": "GAS_FLOW_RATE",
        "lin37.value": "LIQUID_FLOW_RATE",
        "lin38.value": "AI1_CONNECTED",
        "lin39.value": "AI2_CONNECTED",
        "lin4.value": "OPMODE",
        "lin40.value": "AI3_CONNECTED",
        "lin41.value": "AI4_CONNECTED",
        "lin42.value": "GAS_SPECIFIC_GRAV",
        "lin43.value": "OIL_SPECIFIC_GRAV",
        "lin44.value": "WATER_SPECIFIC_GRAV",
        "lin45.value": "OGR",
        "lin46.value": "WGR",
        "lin47.value": "GAS_ESPC_HEAT_CONST_VOL",
        "lin48.value": "GAS_ESPC_HEAT_CONST_PRE",
        "lin49.value": "LIQUID_ESPC_HEAT",
        "lin50.value": "CHOKE_ORIF_DIAMETER",
        "lin51.value": "UPSTREAM_TUBING_DIAMETER",
        "lin52.value": "SING_PHASE_GAS_FLOW_EQ_CORR",
        "lin53.value": "TWO_PHASE_GAS_FLOW_EQ_CORR",
        "lin54.value": "TURNER_CRITICAL_VEL_EQ_CORR",
        "lin55.value": "DEFAULT_UPSTREAM_TEMP",
        "lin56.value": "FLUID_MODEL",
        "lin5.value": "SHUT_IN_OPENING_MODE",
        "lin57.value": "CB",
        "lin58.value": "B_IDP",
        "lin59.value": "PB",
        "lin60.value": "LAST_VALVE_OP",
        "lin61.value": "LAST_OP_CAUSE",
        "lin62.value": "GAS_FLOW_LEVEL",
        "lin63.value": "FIRMWARE",
        "lin64.value": "SERIAL_LSW",
        "lin65.value": "ALTERNATIVE_USE",
        "lin6.value": "SHUT_IN_CLOSING_MODE",
        "lin7.value": "SHUT_IN_REP_INTERVAL",
        "lin8.value": "LAST_SHUT_IN_MONTH",
        "lin9.value": "LAST_SHUT_IN_DAY",
        "longitude": "LONGITUDE",
        "Transport": "TRANSPORT",
    };
    let cneModel = [
        {
            MEASUREMENT: "CHOKE_ORIF_DIAMETER",
            ENDPOINT_ADDRESS: "CHOKE_ORIF_DIAMETER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "1/64 in.",
        },
        {
            MEASUREMENT: "LIQUID_FLOW_RATE",
            ENDPOINT_ADDRESS: "LIQUID_FLOW_RATE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "BBL/DAY",
        },
        {
            MEASUREMENT: "AI1_CONNECTED",
            ENDPOINT_ADDRESS: "AI1_CONNECTED",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "DISCONNECTED-CONNECTED",
        },
        {
            MEASUREMENT: "AI2_CONNECTED",
            ENDPOINT_ADDRESS: "AI2_CONNECTED",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "DISCONNECTED-CONNECTED",
        },
        {
            MEASUREMENT: "SHUT_IN_OPENING_PRE",
            ENDPOINT_ADDRESS: "SHUT_IN_OPENING_PRE",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "AI3_CONNECTED",
            ENDPOINT_ADDRESS: "AI3_CONNECTED",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "DISCONNECTED-CONNECTED",
        },
        {
            MEASUREMENT: "AI4_CONNECTED",
            ENDPOINT_ADDRESS: "AI4_CONNECTED",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "DISCONNECTED-CONNECTED",
        },
        {
            MEASUREMENT: "FLOW_REGIME",
            ENDPOINT_ADDRESS: "FLOW_REGIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "FLOW_REGIME",
        },
        {
            MEASUREMENT: "FLOW_TYPE",
            ENDPOINT_ADDRESS: "FLOW_TYPE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "FLOW_TYPE",
        },
        {
            MEASUREMENT: "FLUID_MODEL",
            ENDPOINT_ADDRESS: "FLUID_MODEL",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "FLUID_MODEL",
        },
        {
            MEASUREMENT: "UPSTREAM_TUBING_DIAMETER",
            ENDPOINT_ADDRESS: "UPSTREAM_TUBING_DIAMETER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "in.",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_CLOSING_MODE",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_CLOSING_MODE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "MC-ClosingMod",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_OPENING_MODE",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_OPENING_MODE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "MC-OpeningMod",
        },
        {
            MEASUREMENT: "GAS_FLOW_RATE",
            ENDPOINT_ADDRESS: "GAS_FLOW_RATE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "MMSCFD",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_OPENING_PRE",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_OPENING_PRE",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "MAX_PRE_TO_OPEN",
            ENDPOINT_ADDRESS: "MAX_PRE_TO_OPEN",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "OPMODE",
            ENDPOINT_ADDRESS: "OPMODE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "OPMODE",
        },
        {
            MEASUREMENT: "SHUT_IN_CLOSING_MODE",
            ENDPOINT_ADDRESS: "SHUT_IN_CLOSING_MODE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SC-ClosingMod",
        },
        {
            MEASUREMENT: "SHUT_IN_OPENING_MODE",
            ENDPOINT_ADDRESS: "SHUT_IN_OPENING_MODE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SC-OpeningMod",
        },
        {
            MEASUREMENT: "OGR",
            ENDPOINT_ADDRESS: "OGR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SCF/STB",
        },
        {
            MEASUREMENT: "WHP",
            ENDPOINT_ADDRESS: "WHP",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "LP",
            ENDPOINT_ADDRESS: "LP",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "WGR",
            ENDPOINT_ADDRESS: "WGR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SCF/STB",
        },
        {
            MEASUREMENT: "WHT",
            ENDPOINT_ADDRESS: "WHT",
            URL_TYPE: "API_URL_TEMPERATURE",
            VARIABLE_TYPE: "CELSIUS",
        },
        {
            MEASUREMENT: "UPSTREAM_PRE",
            ENDPOINT_ADDRESS: "UPSTREAM_PRE",
            URL_TYPE: "API_URL_PRESSURE",
            VARIABLE_TYPE: "PSI",
        },
        {
            MEASUREMENT: "SHUT_IN_MIN_TURNER",
            ENDPOINT_ADDRESS: "SHUT_IN_MIN_TURNER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_MIN_TURNER",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_MIN_TURNER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "GAS_SPECIFIC_GRAV",
            ENDPOINT_ADDRESS: "GAS_SPECIFIC_GRAV",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "OIL_SPECIFIC_GRAV",
            ENDPOINT_ADDRESS: "OIL_SPECIFIC_GRAV",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "WATER_SPECIFIC_GRAV",
            ENDPOINT_ADDRESS: "WATER_SPECIFIC_GRAV",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "SING_PHASE_GAS_FLOW_EQ_CORR",
            ENDPOINT_ADDRESS: "SING_PHASE_GAS_FLOW_EQ_CORR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "TWO_PHASE_GAS_FLOW_EQ_CORR",
            ENDPOINT_ADDRESS: "TWO_PHASE_GAS_FLOW_EQ_CORR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "TURNER_CRITICAL_VEL_EQ_CORR",
            ENDPOINT_ADDRESS: "TURNER_CRITICAL_VEL_EQ_CORR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "GAS_ESPC_HEAT_CONST_VOL",
            ENDPOINT_ADDRESS: "GAS_ESPC_HEAT_CONST_VOL",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SPECIFIC-HEAT",
        },
        {
            MEASUREMENT: "GAS_ESPC_HEAT_CONST_PRE",
            ENDPOINT_ADDRESS: "GAS_ESPC_HEAT_CONST_PRE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SPECIFIC-HEAT",
        },
        {
            MEASUREMENT: "LIQUID_ESPC_HEAT",
            ENDPOINT_ADDRESS: "LIQUID_ESPC_HEAT",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SPECIFIC-HEAT",
        },
        {
            MEASUREMENT: "LAST_SHUT_IN_DAY",
            ENDPOINT_ADDRESS: "LAST_SHUT_IN_DAY",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-DAY",
        },
        {
            MEASUREMENT: "SHUT_IN_REP_INTERVAL",
            ENDPOINT_ADDRESS: "SHUT_IN_REP_INTERVAL",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-HOUR-CUSTOM",
        },
        {
            MEASUREMENT: "LAST_SHUT_IN_HOUR",
            ENDPOINT_ADDRESS: "LAST_SHUT_IN_HOUR",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-HOUR-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_CLOSING_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_CLOSING_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_OPENING_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_OPENING_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_MIN_CLOSED_VALVE_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_MIN_CLOSED_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_MAX_CLOSED_VALVE_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_MAX_CLOSED_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_MIN_OPEN_VALVE_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_MIN_OPEN_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "SHUT_IN_MAX_OPEN_VALVE_TIME",
            ENDPOINT_ADDRESS: "SHUT_IN_MAX_OPEN_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "CLOSED_VALVE_TIME_COUNTER",
            ENDPOINT_ADDRESS: "CLOSED_VALVE_TIME_COUNTER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_CLOSING_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_CLOSING_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_OPENING_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_OPENING_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_MIN_OPEN_VALVE_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_MIN_OPEN_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "MAINT_CYCLES_MAX_OPEN_VALVE_TIME",
            ENDPOINT_ADDRESS: "MAINT_CYCLES_MAX_OPEN_VALVE_TIME",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "OPEN_VALVE_TIME_COUNTER",
            ENDPOINT_ADDRESS: "OPEN_VALVE_TIME_COUNTER",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MIN-CUSTOM",
        },
        {
            MEASUREMENT: "LAST_SHUT_IN_MONTH",
            ENDPOINT_ADDRESS: "LAST_SHUT_IN_MONTH",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "TIME-MONTH",
        },
        {
            MEASUREMENT: "DEFAULT_UPSTREAM_TEMP",
            ENDPOINT_ADDRESS: "DEFAULT_UPSTREAM_TEMP",
            URL_TYPE: "API_URL_TEMPERATURE",
            VARIABLE_TYPE: "CELSIUS",
        },
        {
            MEASUREMENT: "VALVE_STATUS",
            ENDPOINT_ADDRESS: "VALVE_STATUS",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "VALVE_STATUS",
        },
        {
            MEASUREMENT: "CB",
            ENDPOINT_ADDRESS: "CB",
            URL_TYPE: "API_URL_VOLTAGE",
            VARIABLE_TYPE: "VOLT*10",
        },
        {
            MEASUREMENT: "B_IDP",
            ENDPOINT_ADDRESS: "B_IDP",
            URL_TYPE: "API_URL_VOLTAGE",
            VARIABLE_TYPE: "VOLT*10",
        },
        {
            MEASUREMENT: "PB",
            ENDPOINT_ADDRESS: "PB",
            URL_TYPE: "API_URL_VOLTAGE",
            VARIABLE_TYPE: "VOLT*10",
        },
        {
            MEASUREMENT: "LAST_VALVE_OP",
            ENDPOINT_ADDRESS: "LAST_VALVE_OP",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "LAST_VALVE_OP",
        },
        {
            MEASUREMENT: "LAST_OP_CAUSE",
            ENDPOINT_ADDRESS: "LAST_OP_CAUSE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "LAST_OP_CAUSE",
        },
        {
            MEASUREMENT: "GAS_FLOW_LEVEL",
            ENDPOINT_ADDRESS: "GAS_FLOW_LEVEL",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "MMSCFD",
        },
        {
            MEASUREMENT: "FIRMWARE",
            ENDPOINT_ADDRESS: "FIRMWARE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "SERIAL_LSW",
            ENDPOINT_ADDRESS: "SERIAL_LSW",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "SIN_UNIDAD",
        },
        {
            MEASUREMENT: "ALTERNATIVE_USE",
            ENDPOINT_ADDRESS: "ALTERNATIVE_USE",
            URL_TYPE: "API_URL_GENERIC",
            VARIABLE_TYPE: "ALTERNATIVE_USE",
        },
    ];

    let dataJSON = payload.asJsonObject();

    function parseaValor(measure, urlType, variableType) {
        if (urlType == "API_URL_PRESSURE") {
            if (variableType == "PSI") measure = measure * 6894.757;
            if (variableType == "hPa") measure = measure * 100;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_TEMPERATURE") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_GENERIC") {
            if (variableType == "TIME-MIN") measure = measure * 60;
            if (variableType == "TIME-HOUR") measure = measure * 3600;
            if (variableType == "TIME-MIN-CUSTOM") measure = (measure / 60).toFixed(2);
            if (variableType == "TIME-SECONDStoMIN") measure = Math.round(measure / 60);
            if (variableType == "MMSCFD") measure = (measure * 1177.17).toFixed(2);
            if (variableType == "BBL/DAY")
                measure = (measure * 0.006624470622).toFixed(2);
            if (variableType == "cm/s") measure = (measure * 0.036).toFixed(2);
            if (variableType == "LEVEL-MM/100") measure = measure * 100;
            if (
                variableType == "COEFFICIENT" ||
                variableType == "FLOAT" ||
                variableType == "SCF/STB" ||
                variableType == "SPECIFIC-HEAT"
            )
                measure = (measure * 1.0).toFixed(3);

            return parseFloat(measure);
        }

        if (urlType == "API_URL_HUMIDITY") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_VOLTAGE") {
            measure = measure * 0.1;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_WEIGHT") {

            if (variableType == "LBS") measure = measure * 453.592;

            return parseFloat(measure);
        }
        return measure;

    };

    dataJSON.data.forEach((element) => {
        let sensor = device.endpoints.byAddress(mappingCNE[element.tagname]);
        if (sensor != null) {
            let meassureInfo = cneModel.find(
                (item) => mappingCNE[element.tagname] == item.MEASUREMENT
            );

            let sensorValue = parseaValor(
                parseFloat(element.value),
                meassureInfo.URL_TYPE,
                meassureInfo.VARIABLE_TYPE
            );

            if (sensorValue == NaN) env.log("Valore del sensor: NaN");

            if (sensorValue != "NaN") {
                sensorValue = parseFloat(sensorValue);
                let timeUTC = new Date(element.ts * 1000).toUTCString();

                switch (meassureInfo.URL_TYPE) {
                    case "API_URL_PRESSURE":
                        env.log("actualiza sensor de presion");
                        sensor.updatePressureSensorStatus(sensorValue, timeUTC);
                        break;

                    case "API_URL_TEMPERATURE":
                        env.log("actualiza sensor de temperatura");
                        sensor.updateTemperatureSensorStatus(sensorValue, timeUTC);
                        break;

                    case "API_URL_GENERIC":
                        env.log("actualiza sensor generico");
                        sensor.updateGenericSensorStatus(sensorValue, timeUTC);

                        break;

                    case "API_URL_HUMIDITY":
                        env.log("actualiza sensor de humedad");
                        sensor.updateHumiditySensorStatus(sensorValue, timeUTC);
                        break;

                    case "API_URL_VOLTAGE":
                        env.log("actualiza sensor de voltage");
                        sensor.updateVoltageSensorStatus(sensorValue, timeUTC);
                        break;

                    case "API_URL_WEIGHT":
                        env.log("actualiza sensor de peso");
                        sensor.updateWeightSensorStatus(sensorValue, timeUTC);
                        break;

                    default:
                        env.log("no actualiza: " + meassureInfo.URL_TYPE);
                        break;
                }
            }
        }
    });


}

function buildDownlink(device, endpoint, command, payload) {
    // This function allows you to convert a command from the platform 
    // into a payload to be sent to the device.
    // Learn more at https://wiki.cloud.studio/page/200

    // The parameters in this function are:
    // - device: object representing the device to which the command will
    //   be sent. 
    // - endpoint: endpoint object representing the endpoint to which the 
    //   command will be sent. May be null if the command is to be sent to 
    //   the device, and not to an individual endpoint within the device.
    // - command: object containing the command that needs to be sent. More
    //   information at https://wiki.cloud.studio/page/1195.

    // This example is written assuming a device that contains a single endpoint, 
    // of type appliance, that can be turned on, off, and toggled. 
    // It is assumed that a single byte must be sent in the payload, 
    // which indicates the type of operation.

    /*
         payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
         payload.buildResult = downlinkBuildResult.ok; 
    
         switch (command.type) { 
               case commandType.onOff: 
                       switch (command.onOff.type) { 
                               case onOffCommandType.turnOn: 
                                       payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
                                       break; 
                               case onOffCommandType.turnOff: 
                                       payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
                                       break; 
                               case onOffCommandType.toggle: 
                                       payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
                                       break; 
                               default: 
                                       payload.buildResult = downlinkBuildResult.unsupported; 
                                       break; 
                       } 
                       break; 
               default: 
                       payload.buildResult = downlinkBuildResult.unsupported; 
                       break; 
         }
    */

}