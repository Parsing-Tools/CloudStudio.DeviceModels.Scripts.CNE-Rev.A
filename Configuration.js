function getConfiguration(config) {

    config.addressLabel = { en: "Serial Number", es: "Número de Serie" };
}

function getEndpoints(deviceAddress, endpoints) {
    endpoints.addEndpoint("CHOKE_ORIF_DIAMETER", { en: "Choke Orificie Diameter", es: "Diámetro del orificio del Choke" }, endpointType.genericSensor)
        .variableTypeId = 1195;
    endpoints.addEndpoint("LIQUID_FLOW_RATE", { en: "Liquid flow rate", es: "Caudal de liquido" }, endpointType.genericSensor)
        .variableTypeId = 1201;
    endpoints.addEndpoint("AI1_CONNECTED", { en: "Analog input #1", es: "Entrada analógica #1" }, endpointType.genericSensor)
        .variableTypeId = 1212;
    endpoints.addEndpoint("AI2_CONNECTED", { en: "Analog input #2", es: "Entrada analógica #2" }, endpointType.genericSensor)
        .variableTypeId = 1212;
    endpoints.addEndpoint("SHUT_IN_OPENING_PRE", { en: "Shut-in Cycle - Opening Pressure", es: "Ciclo de cierre - Presión de apertura" }, endpointType.pressureSensor);
    endpoints.addEndpoint("AI3_CONNECTED", { en: "Analog input #3", es: "Entrada analógica #3" }, endpointType.genericSensor)
        .variableTypeId = 1212;
    endpoints.addEndpoint("AI4_CONNECTED", { en: "Analog input #4", es: "Entrada analógica #4" }, endpointType.genericSensor)
        .variableTypeId = 1212;
    endpoints.addEndpoint("FLOW_REGIME", { en: "Flow regime", es: "Regimen de flujo" }, endpointType.genericSensor)
        .variableTypeId = 1196;
    endpoints.addEndpoint("FLOW_TYPE", { en: "Flow type", es: "Tipo de flujo" }, endpointType.genericSensor)
        .variableTypeId = 1197;
    endpoints.addEndpoint("FLUID_MODEL", { en: "Fluid Model", es: "Modelo de fluido" }, endpointType.genericSensor)
        .variableTypeId = 1198;
    endpoints.addEndpoint("UPSTREAM_TUBING_DIAMETER", { en: "Upstream Tubing Diameter", es: "Diámetro de la cañería aguas arriba" }, endpointType.genericSensor)
        .variableTypeId = 1199;
    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_MODE", { en: "Maintenance Cycles - Closing Mode", es: "Ciclos de mantenimiento - Modo de cierre" }, endpointType.genericSensor)
        .variableTypeId = 1202;
    endpoints.addEndpoint("MAINT_CYCLES_OPENING_MODE", { en: "Maintenance Cycles - Opening Mode", es: "Ciclos de mantenimiento - Modo de apertura" }, endpointType.genericSensor)
        .variableTypeId = 1203;
    endpoints.addEndpoint("GAS_FLOW_RATE", { en: "Gas flow rate", es: "Caudal de gas" }, endpointType.genericSensor)
        .variableTypeId = 1200;
    endpoints.addEndpoint("MAINT_CYCLES_OPENING_PRE", { en: "Maintenance Cycles - Opening Pressure", es: "Ciclos de mantenimiento - Presión de apertura" }, endpointType.pressureSensor);
    endpoints.addEndpoint("MAX_PRE_TO_OPEN", { en: "Max. Line Pressure To Open", es: "Presión máxima de la línea para abrir" }, endpointType.pressureSensor);
    endpoints.addEndpoint("OPMODE", { en: "Operational Mode", es: "Modo de operación" }, endpointType.genericSensor)
        .variableTypeId = 1204;
    endpoints.addEndpoint("SHUT_IN_CLOSING_MODE", { en: "Shut-in Cycle - Closing Mode", es: "Ciclo de cierre - Modo de cierre" }, endpointType.genericSensor)
        .variableTypeId = 1206;
    endpoints.addEndpoint("SHUT_IN_OPENING_MODE", { en: "Shut-in Cycle - Opening Mode", es: "Ciclo de cierre - Modo de apertura" }, endpointType.genericSensor)
        .variableTypeId = 1207;
    endpoints.addEndpoint("OGR", { en: "OGR", es: "OGR" }, endpointType.genericSensor)
        .variableTypeId = 1205;
    endpoints.addEndpoint("WHP", { en: "Wellhead pressure", es: "Presión de cabeza de pozo" }, endpointType.pressureSensor);
    endpoints.addEndpoint("LP", { en: "Line pressure", es: "Presión de linea" }, endpointType.pressureSensor);
    endpoints.addEndpoint("WGR", { en: "WGR", es: "WGR" }, endpointType.genericSensor)
        .variableTypeId = 1205;
    endpoints.addEndpoint("WHT", { en: "Wellhead temperature", es: "Temperatura de cabeza de pozo" }, endpointType.temperatureSensor);
    endpoints.addEndpoint("UPSTREAM_PRE", { en: "Pressure upstream of choke", es: "Presion aguas arriba del choke" }, endpointType.pressureSensor);
    endpoints.addEndpoint("SHUT_IN_MIN_TURNER", { en: "Shut-in Cycle - Min. Turner Coefficient", es: "Ciclo de cierre - Coeficiente de inversión mínimo" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("MAINT_CYCLES_MIN_TURNER", { en: "Maintenance Cycles - Min. Turner Coefficient", es: "Ciclos de mantenimiento - Coeficiente de inversión mínimo" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("GAS_SPECIFIC_GRAV", { en: "Gas Specific Gravity", es: "Gravedad específica del gas" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("OIL_SPECIFIC_GRAV", { en: "Oil Specific Gravity", es: "Gravedad específica del petróleo" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("WATER_SPECIFIC_GRAV", { en: "Water Specific Gravity", es: "Gravedad específica del agua" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("SING_PHASE_GAS_FLOW_EQ_CORR", { en: "Single Phase Gas Flow Eq. Correction Factor", es: "Factor de la corrección de la ecuación de flujo de gas monofásico" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("TWO_PHASE_GAS_FLOW_EQ_CORR", { en: "Two Phases Mixture Flow Eq. Correction Factor", es: "Factor de la corrección de la ecuación de flujo de gas de dos fases" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("TURNER_CRITICAL_VEL_EQ_CORR", { en: "Turner Critical Velocity Eq. Correction Factor", es: "Factor de corrección de velocidad crítica de turner" }, endpointType.genericSensor)
        .variableTypeId = 1123;
    endpoints.addEndpoint("GAS_ESPC_HEAT_CONST_VOL", { en: "Gas Specific Heat At Constant Volume", es: "Calor específico del gas a vol. const." }, endpointType.genericSensor)
        .variableTypeId = 1208;
    endpoints.addEndpoint("GAS_ESPC_HEAT_CONST_PRE", { en: "Gas Specific Heat At Constant Pressure", es: "Calor específico del gas a pres. const." }, endpointType.genericSensor)
        .variableTypeId = 1208;
    endpoints.addEndpoint("LIQUID_ESPC_HEAT", { en: "Liquid Specific Heat", es: "Calor específico del líquido" }, endpointType.genericSensor)
        .variableTypeId = 1208;
    endpoints.addEndpoint("LAST_SHUT_IN_DAY", { en: "Last Shut-in Cycle (day)", es: "Último ciclo de cierre (día)" }, endpointType.genericSensor)
        .variableTypeId = 1209;
    endpoints.addEndpoint("SHUT_IN_REP_INTERVAL", { en: "Shut-in Cycle - Repetition Interval", es: "Ciclo de cierre - Intervalo de repetición" }, endpointType.genericSensor)
        .variableTypeId = 1213;
    endpoints.addEndpoint("LAST_SHUT_IN_HOUR", { en: "Last Shut-in Cycle", es: "Último ciclo de cierre" }, endpointType.genericSensor)
        .variableTypeId = 1213;
    endpoints.addEndpoint("SHUT_IN_CLOSING_TIME", { en: "Shut-in Cycle - Closing Time", es: "Ciclo de cierre - Tiempo de cierre" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("SHUT_IN_OPENING_TIME", { en: "Shut-in Cycle - Opening Time", es: "Ciclo de cierre - Tiempo de apertura" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("SHUT_IN_MIN_CLOSED_VALVE_TIME", { en: "Shut-in Cycle - Min. Closed Valve Time", es: "Ciclo de cierre - Tiempo mínimo de válvula cerrada" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("SHUT_IN_MAX_CLOSED_VALVE_TIME", { en: "Shut-in Cycle - Max. Closed Valve Time", es: "Ciclo de cierre - Tiempo máximo de la válvula cerrada" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("SHUT_IN_MIN_OPEN_VALVE_TIME", { en: "Shut-in Cycle - Min. Open Valve Time", es: "Ciclo de cierre - Tiempo mínimo de válvula abierta" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("SHUT_IN_MAX_OPEN_VALVE_TIME", { en: "Shut-in Cycle - Max. Open Valve Time", es: "Ciclo de cierre - Tiempo máximo de la válvula abierta" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("CLOSED_VALVE_TIME_COUNTER", { en: "Closed Valve Time Counter", es: "Contador de tiempo de válvula cerrada" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_TIME", { en: "Maintenance Cycles - Closing Time", es: "Ciclos de mantenimiento - Hora de cierre" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_OPENING_TIME", { en: "Maintenance Cycles - Opening Time", es: "Ciclos de mantenimiento - Tiempo de apertura" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", { en: "Maintenance Cycles - Min. Closed Valve Time", es: "Ciclos de mantenimiento - Tiempo min. de válvula cerrada" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", { en: "Maintenance Cycles - Max. Closed Valve Time", es: "Ciclos de mantenimiento - Tiempo max. de válvula cerrada" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_MIN_OPEN_VALVE_TIME", { en: "Maintenance Cycles - Min. Open Valve Time", es: "Ciclos de mantenimiento - Tiempo min. de válvula abierta" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("MAINT_CYCLES_MAX_OPEN_VALVE_TIME", { en: "Maintenance Cycles - Max. Open Valve Time", es: "Ciclos de mantenimiento - Tiempo max. de válvula abierta" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("OPEN_VALVE_TIME_COUNTER", { en: "Open Valve Time Counter", es: "Contador de tiempo de válvula abierta" }, endpointType.genericSensor)
        .variableTypeId = 1214;
    endpoints.addEndpoint("LAST_SHUT_IN_MONTH", { en: "Last Shut-in Cycle (month)", es: "Último ciclo de cierre (mes)" }, endpointType.genericSensor)
        .variableTypeId = 1210;
    endpoints.addEndpoint("DEFAULT_UPSTREAM_TEMP", { en: "Default Upstream Temperature", es: "Temperatura predeterminada aguas arriba" }, endpointType.temperatureSensor);
    endpoints.addEndpoint("VALVE_STATUS", { en: "Valve Status", es: "Estado de valvula" }, endpointType.genericSensor)
        .variableTypeId = 1215;
    endpoints.addEndpoint("VALVE_STATUS-0/1", { en: "Valve Status (0/1)", es: "Estado de valvula (0/1)" }, endpointType.genericSensor)
        .variableTypeId = 1216;
    endpoints.addEndpoint("CB", { en: "Battery voltage CB", es: "Tensión de batería CB" }, endpointType.voltageSensor);
    endpoints.addEndpoint("B_IDP", { en: "IDP Vsupply", es: "Alimentación de tensión IDP" }, endpointType.voltageSensor);
    endpoints.addEndpoint("PB", { en: "Battery voltage PB", es: "Tensión de batería PB" }, endpointType.voltageSensor);


}

function validateDeviceAddress(address, result) {

}

function updateDeviceUIRules(device, rules) {


    rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {

    rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}
