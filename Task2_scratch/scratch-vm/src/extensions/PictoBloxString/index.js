const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');


class Scratch3myExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'myExtension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'indexOfBlock',
                    blockType: BlockType.REPORTER,
                    text: '[S1] Index of S1 [S2]',
                    arguments: {
                        S1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'world'
                        },
                        S2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello world'
                        }
                    }
                },
                {
                    opcode: 'equalBlock',
                    blockType: BlockType.BOOLEAN,
                    text: '[S1] EqualCheck [S2]',
                    arguments: {
                        S1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello'
                        },
                        S2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'HELLO'
                        }
                    }
                }
            ],

        };
    }

    indexOfBlock(args) {
        
        return args.S2.indexOf(args.S1);

    }

    equalBlock(args) {
        return args.S1.toLowerCase() === args.S2.toLowerCase();
    }
}

module.exports = Scratch3myExtension;
