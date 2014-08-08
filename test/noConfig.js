delete require.cache[require.resolve('./../index')];

var br = require('./../index'),
    expect = require('expect.js'),
    path = require('path'),
    join = path.join;

br._setRootDir(path.resolve(__dirname + '/noConfig'));

describe('Root path resolve ', function() {
    it('name should work with direct dir', function() {
        expect(br('a')).to.be('a');
        expect(br('a/b')).to.be('ab');
        expect(br('a/b/c')).to.be('abc');
    });

     it('name should work with direct dir and index', function() {
        expect(br('a/index')).to.be('a');
        expect(br('a/b/index')).to.be('ab');
        expect(br('a/b/c/index')).to.be('abc');
    });

    it('name should work with different file', function() {
        expect(br('a/a')).to.be('aa');
    });
});