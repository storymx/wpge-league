/**
 * Created by gabrieljaramillo on 3/25/18.
 */

module.exports.MISSING_BODY_PARAMS =  'Missing Body Parameters'
module.exports.MISSING_ID_PARAM = 'Missing ID Parameter'
module.exports.MISSING_REQ_PARAMS = 'Missing Request Params'

let serverResponses = {
    statusOKSuccess: (response, res) => {
        return res.status(200).json({
            data:response,
            code:200,
            error: false
        });
    },
    statusOKSuccessWithMessage: (message,response,res) => {
        return res.status(200).json({
            data:response,
            message:message,
            code:200,
            error: false,
        });
    },
    statusBadRequest: (err, res) => {
        return res.status(400).json({
            message: 'HTTP ERROR 400 - BAD REQUEST',
            errorMessage: err || "INVALID SYNTAX FOR THIS REQUEST WAS PROVIDED.",
            code: 400,
            error: true
        });
    },
    responseNotAuthorized: (err, res) =>{
        return res.status(401).json({
            message: 'HTTP ERROR 401 - UNAUTHORIZED ACTION',
            errorMessage: err || "YOU ARE UNAUTHORIZED TO ACCESS THE REQUESTED RESOURCE. PLEASE LOG IN",
            code: 401,
            error: true
        });
    },
    responsePaymentRequired: (err,res) => {
        return res.status(402).json({
            message: 'HTTP ERROR 402 -  PAYMENT REQUIRED',
            errorMessage: err || "YOUR ACCOUNT REQUIRES PAYMENT FOR THE SPECIFIED ITEM.",
            code: 402,
            error: true
        })
    },
    statusForbidden: (err, res) =>{
        return res.status(403).json({
            message: 'HTTP ERROR 403 - FORBIDDEN',
            errorMessage: err || "YOUR ACCOUNT IS NOT AUTHORIZED TO ACCESS THE REQUESTED RESOURCE." ,
            code:403,
            error: true
        })
    },
    statusNotFound: (err, res) => {
        return res.status(404).json({
            message: 'HTTP ERROR 404 - NOT FOUND',
            errorMessage: err || "WE COULD NOT FIND THE RESOURCE YOU REQUESTED. PLEASE REFER TO THE DOCUMENTATION FOR THE LIST OF RESOURCES.",
            code:404,
            error: true
        })
    },
    statusMethodNotAllowed: (err, res) => {
        return res.status(405).json({
            message: 'HTTP ERROR 405 - METHOD NOT ALLOWED',
            errorMessage: err || "THIS METHOD TYPE IS NOT CURRENTLY SUPPORTED.",
            code: 405,
            error: true
        })
    },
    statusRequestTimeout: (err, res) => {
        return res.status(408).json({
            message: 'HTTP ERROR 408 - REQUEST TIMEOUT',
            errorMessage: err || "CLIENT DID NOT PRODUCE A REQUEST WITHIN THE TIME THAT THE SERVER WAS PREPARED TO WAIT.",
            code: 408,
            error: true
        })
    },
    statusServerConflictError: (err, res) => {
        return res.status(409).json({
            message: 'HTTP ERROR 409 - Conflict Data Error',
            errorMessage: "INTERNAL CONFLICT DATA ERROR - PREVENTING DUPLICATES " ,
            code: 409,
            error: true
        })
    },
    statusServerError: (err,res) =>{
        return res.status(500).json({
            message: 'HTTP ERROR 500 - Server Internal Error',
            errorMessage: err || "UNEXPECTED INTERNAL SERVER ERROR.",
            code: 500,
            error: true
        })
    }
}
module.exports = serverResponses;