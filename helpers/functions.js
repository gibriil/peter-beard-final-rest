export const errorLog = (err) => {
    console.log(err);
};

export const errorCatch = (err) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
};

export const errorThrow = (StatusCode, Message) => {
    const error = new Error(Message);
    error.statusCode = StatusCode;
    return error;
};