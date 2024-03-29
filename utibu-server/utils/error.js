export const errorHandler = async (statusCode, message) => {
    const error = new Error()
    err.statusCode = statusCode
    err.message = message
    return error
}