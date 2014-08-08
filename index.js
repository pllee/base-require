var path = require('path'),
    join = path.join,
    rootDir = path.resolve(join(__dirname,'../../')),
    brConfig, brFileName = 'br';

try {
    brConfig = require(join(rootDir, brFileName));
} catch (e) {}

function getFileName(fileName) {
    var fileSplit, pathKey, pathValue;
    if(brConfig) {
        fileSplit = fileName.split('/');
        pathKey = fileSplit.shift();
        pathValue = brConfig[pathKey];
        if(pathValue) {
            return join(pathValue, fileSplit.join('/'));
        }
    }

    return fileName;
}

module.exports = function(fileName) {
    return require(join(rootDir, getFileName(fileName)));
};