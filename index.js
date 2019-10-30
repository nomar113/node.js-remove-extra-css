const regex = /\s[.]([a-zA-Z_][-]?)*/gm;
const fs = require('fs')
const archivePath = '/home/nomar/projects/amp_v1/components/organisms/oi-play/headerOiPlay.js'


let m;
const fileBuffer = fs.readFileSync(archivePath, 'utf-8')
const str = fileBuffer.toString()

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    console.log(m[0].match)
    m.forEach((match, groupIndex) => {
        if (match !== ' .' && match)
            console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
