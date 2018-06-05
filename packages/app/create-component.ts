#!/usr/bin/env node

// @ts-ignore: node module
import * as readline from 'readline';
// @ts-ignore: node module
import * as fs from 'fs';
import * as process from 'process';

const DEFAULT_DIR = './src/components';

const component = (name) => `import * as React from 'react';

import './${name}.scss';

export interface ${name}Props {

}

export class ${name} extends React.Component<${name}Props> {
    constructor(props:${name}Props) {
        super(props);
    }

    public render() {
        return <div />
    }
}
`;

const componentConnected = (name) => `import * as React from 'react';
import { connect } from 'react-redux';

import './${name}.scss';

export interface ${name}Props {

}

export class ${name}Base extends React.Component<${name}Props> {
    constructor(props:${name}Props) {
        super(props);
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}

export const ${name} = connect(
    null,
    null
)(${name}Base);
`;

const exporter = (name) => `export * from './${name}';
`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Component name:\n> ', answer => {
    askConnected(answer);
});

const askConnected = name => {
    rl.question('Make a connected component? [y/n]\n> ', answer => {
        if (answer === 'y' || answer === 'yes') {
            writeComponent(name, true);
        } else {
            writeComponent(name, false);
        }
    });
};

const writeComponent = (name, isConnected) => {
    const componentString = isConnected ? componentConnected(name) : component(name);

    fs.mkdir(`${DEFAULT_DIR}/${name}`, err => {
        if (err) throw new Error();
        fs.writeFile(`${DEFAULT_DIR}/${name}/${name}.tsx`, componentString, err => {
            if (err) throw new Error();
            console.log(`Wrote component ${name} tsx file [1/3]`);
            fs.writeFile(`${DEFAULT_DIR}/${name}/index.ts`, exporter(name), err => {
                if (err) throw new Error();
                console.log(`Wrote component ${name} index file [2/3]`);
                fs.writeFile(`${DEFAULT_DIR}/${name}/${name}.scss`, '\n', err => {
                    if (err) throw new Error();
                    console.log(`Wrote component ${name} scss file [3/3]`);
                });
            });
        });
    });
};