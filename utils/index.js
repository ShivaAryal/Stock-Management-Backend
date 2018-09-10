let {transformError} = require('./helper');

const response = (function() {

    const sendJson = (res, status, message, data) => res.send({status, message, data});

    const sendDBError = (res, msg = "Error in Database!") => sendJson(res,'failed',transformError(msg),'');

    const sendData = (res, data) => sendJson(res,'success','',data);

    const sendDataSuccess = (res, msg="Data Added Successfully!", data) => sendJson(res,'success',msg,data);

    const sendDataError = (res, msg="Failed to modify data") => sendJson(res,'failed',transformError(msg),'');

    return {
        sendDBError, sendData, sendDataSuccess, sendDataError
    }

})();   


module.exports = response