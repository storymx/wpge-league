
let constants = {
    DEFAULT_TEAM: "5cca6c8567227b06e23a0e27",
    
    NOT_FOUND_IN_DATABASE: (modelName) => {
        return 'No se encontro record del '+modelName+', dentro de la base de datos.'
    },
    REPEATED_IN_DATABASE: (modelName) => {
        return 'Hay almenos un '+ modelName +' con el mismo valor denro de la base de datos.'
    },
    SUCCESSFULLY_SAVED: (modelName) => {
        return 'El '+modelName+' ha sido guardado satisfactoriamente.'
    },
    SUCCESSFULLY_UPDATED: (modelName) => {
        return 'El '+modelName+' ha sido actualizado satisfactoriamente.'
    },
    SUCCESSFULLY_DELETED: (modelName) => {
        return 'El '+modelName+' ha sido eliminado satisfactoriamente.'
    },
    MISSING_BODY_OR_FIELDS: (modelName) => {
        return 'EL modelo '+modelName+', contiene campos obligatorios faltantes, o no se envio ningun valor al Cuerpo del request.'
    },
    MISSING_MODEL_ID: (modelId) => {
        return 'Parametros Faltantes!, o falta el '+modelId+' en la url.'
    },
    NEW_USER_REGISTRATION_SUCCESS: () => {
        return 'Se ha registrado exitosamente un nuevo usuario.'
    },
    NEW_USER_REGISTRATION_ERROR: (err) => {
        return 'Se ha encontrado un error en el proceso de Registro. ERROR DE SERVIDOR: '+err;
    },
    getToday: () => {
        const currentDate = new Date()
        const currentDay = currentDate.getDate() < 6 ? 1 : currentDate.getDate()
        const fiveDaysBefore = currentDate.getDate() < 6 ? 1 : currentDate.getDate()-5
        const today = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDay
        return today
    },
    get5DaysBefore: () => {
        const currentDate = new Date()
        const fiveDaysBefore = currentDate.getDate() < 6 ? 1 : currentDate.getDate()-5
        const range5DaysBefore = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+fiveDaysBefore
        return range5DaysBefore
    },
}

module.exports = constants