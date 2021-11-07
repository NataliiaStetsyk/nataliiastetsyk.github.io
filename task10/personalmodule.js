const os = require("os");
const getUserInfo = () => {
    return os.userInfo().username;
};
const getDate = () => {
    return new Date();
};
exports.getUserInfo = getUserInfo;
exports.getDate = getDate;