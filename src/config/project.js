module.exports = {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    isLocal: () => {
        return process.env.APP_VERSION === 'local' ? true : false
    }
};