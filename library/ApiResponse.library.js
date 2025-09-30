const success = (data = []) => {
    return {
        "success": true,
        "error": null,
        "data": data
    };
}

const error = (error = []) => {
    return {
        "success": false,
        "error": error,
        "data": null,  
    };
}

module.exports = { success, error };