var path = require('path'),
    join = path.join,
    rootDir = path.resolve(join(__dirname, '../../')),
    brConfig, brFileName = 'br', packageJsonNode = 'brDirs';

/**
 * Try to read config from br.js or br.json and then look under
 * the package.json to see if it is in the brDirs node
 */
function initBrConfig() {
    try {
        brConfig = require(join(rootDir, brFileName));
    } catch (e) {
        try {
            brConfig = require(join(rootDir, 'package.json'))[packageJsonNode];
        } catch (e2) {}
    }
}

initBrConfig();


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

/**
 * Add method to help test
 * @private
 */
module.exports._setRootDir = function(dir) {
    rootDir = dir;
    initBrConfig();
};