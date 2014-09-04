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


function getFileName(fileNameOrKey, append) {
    var configValue = brConfig && brConfig[fileNameOrKey];

    return configValue ? join(configValue, append || '') : fileNameOrKey;
}

module.exports = function(fileName, append) {
    return require(join(rootDir, getFileName(fileName, append)));
};

/**
 * Add method to help test
 * @private
 */
module.exports._setRootDir = function(dir) {
    rootDir = dir;
    initBrConfig();
};