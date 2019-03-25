const fs = require('fs');

const data = require('./data.json');

const WRITE_TO = './dist';

const HTML = (data:any) => `<!DOCTYPE html><html lang='en'>
    <head>
        <title>Clickopolis | Roadmap</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel='stylesheet' href='./roadmap.css'>
    </head>
    <body>
        <div class='container'>
            <header>
                <img class='logo' src='./icon.png' />
                <h2>Clickopolis</h2>
                <h1>Roadmap <img class='roadmap' src='./roadmap.png' /></h1>
            </header>
            <table class='roadmap-table'>
                ${ buildTable(data) }
            </table>
        </div>
    </body>
</html>`;

const getStatus = (status: string, note: string, match: string) => {
    if (status === match) return `<span title='${note}' class='status-indicator ${status.replace(/\s/g, '-')}'>${status}</span>`;
    return ``;
};

const buildTable = (data:any) => {
    const head = `<thead>
        <tr>
            <th>Feature</th>
            <th>Not planned</th>
            <th>Planned</th>
            <th>In Progress</th>
            <th>Ready Soon</th>
            <th>Released</th>
        </tr>
    </thead>`;

    const body = `<tbody>${
        data.features.map((f:any, idx:number) => `<tr data-id='${idx}' class='status-${f.status.replace(/\s/g, '-')}'>
            <td class='category-name'>
                <a href='${f.link || '#'}'>${ f.name }</a>
            </td>
            <td>${ getStatus(f.status, f.note, 'not planned') }</td>
            <td>${ getStatus(f.status, f.note, 'planned') }</td>
            <td>${ getStatus(f.status, f.note, 'in progress') }</td>
            <td>${ getStatus(f.status, f.note, 'ready soon') }</td>
            <td>${ getStatus(f.status, f.note, 'released') }</td>
        </tr>`).join('')

    }<tbody>`;

    return head + body;
};

const writeRoadmap = () => {
    fs.createReadStream('./icon.png').pipe(fs.createWriteStream('./dist/icon.png'));
    fs.createReadStream('./roadmap.png').pipe(fs.createWriteStream('./dist/roadmap.png'));
    fs.createReadStream('./roadmap.css').pipe(fs.createWriteStream('./dist/roadmap.css'));
    fs.writeFileSync(`${WRITE_TO}/index.html`, HTML(data));
};

writeRoadmap();

//fdasdrdfd