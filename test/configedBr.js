
delete require.cache[require.resolve('./../index')];

var br = require('./../index'),
    expect = require('expect.js'),
    path = require('path'),
    join = path.join;

br._setRootDir(path.resolve(__dirname + '/config'));

describe('Configured paths', function() {
    var eeAliasedName = 'myNameForE',
        eeValue = 'ee';

    it('aliased name should work with direct dir', function() {
        expect(br(eeAliasedName)).to.be(eeValue);
    });

     it('aliased name should work with direct dir and index', function() {
        expect(br(eeAliasedName, 'index')).to.be(eeValue);
    });

    it('aliased name should work with different file', function() {
        expect(br(eeAliasedName, 'a')).to.be('a');
    });

    it('no alias name should work as root require', function() {
        expect(br('a')).to.be('a');
    });


});