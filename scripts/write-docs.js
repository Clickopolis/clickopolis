const fs = require('fs');
const path = require('path');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const isDirectory = source => fs.lstatSync(source).isDirectory();
const getDirectories = source => fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

/** Returns an array of package names */
const getPackages = () => {
    return getDirectories('./packages').map(f => f.split('/')[1]);
}

const getPackageVersions = () => {
    return getDirectories('./packages').map(package => {
        const json = fs.readFileSync(`${package}/package.json`, 'utf8');
        const version = JSON.parse(json).version;
        return {
            name: package.split('/')[1],
            version
        };
    })
}

const templateForPackages = ({ title }) => `<html>
    <head>
        <title>${ title }</title>
        <link href='../doc-styles.css' rel='stylesheet' />
    </head>
    <body>
        <header>
            Clickopolis Docs | <small>${title}</small>
        </header>
        <section>

        </section>
    </body>
</html>`

const template = ({ title }) => `<html>
    <head>
        <title>${ title }</title>
        <link href='./doc-styles.css' rel='stylesheet' />
    </head>
    <body>
        <header>
            Clickopolis Docs | <small>${title}</small>
        </header>
        <section>
            <h2>Table of Contents</h2>
            ${ generateTOC(getPackageVersions()) }
        </section>
    </body>
</html>`

const generateTOC = (pages) => {
    return `<ul>
        ${
            pages.map((p, i) => `<li><a href='./${p.name}'>${p.name} ${p.version}</li>`).join('\n')
        }
</ul>`
}


const writeDocFolders = (pkgs) => {
    pkgs.forEach(p => fs.mkdir(`./docs/${p}`, err => {  if (err) console.log('Folder already existed') }));
}

const writeDocFolderIndices = (pkgs) => {
    pkgs.forEach(p => {
        fs.writeFile(`./docs/${p}/index.html`, templateForPackages({ title: capitalize(p) }), err => {
            if (err) throw new Error();
        });
    });
}



const writeDocIndex = () => {
    fs.writeFile('./docs/index.html', template({ title: 'Clickopolis'}), err => { if (err) throw new Error(); });
}

writeDocFolders(getPackages())
writeDocFolderIndices(getPackages())
writeDocIndex()