const regexClassCSS = /\s[.]([a-zA-Z_][-]?)*/gm
const regexClassName = /className="([\w\s-]*)"/gm
const fs = require('fs')
const archivePath = '/home/nomar/projects/amp_v1/components/organisms/oi-play/footerOiPlay.js'
const classes = []
const classNotUsed = []

let m;
const fileBuffer = fs.readFileSync(archivePath, 'utf-8')
const str = fileBuffer.toString()

while ((m = regexClassName.exec(str)) !== null) {


    if (m.index === regexClassName.lastIndex) {
        regexClassName.lastIndex++;
    }

    // console.log(m[1])

    m[1].split(' ').map(item => {
        if (item !== '')
            classes.push(item)
    })
}

let uniqueClassesUsed = [...new Set(classes)]
uniqueClassesUsed.sort()
console.log(uniqueClassesUsed)

while ((m = regexClassCSS.exec(str)) !== null) {

    if (m.index === regexClassCSS.lastIndex) {
        regexClassCSS.lastIndex++
    }

    if (m[0] !== ' .') {
        classCSS = m[0].substring(2, m[0].length)
        if (!uniqueClassesUsed.includes(classCSS)) {
            classNotUsed.push(classCSS)
        }
    }
}


let uniqueClassesNotUsed = [...new Set(classNotUsed)]
uniqueClassesNotUsed.sort()
// console.log(uniqueClassesNotUsed)
