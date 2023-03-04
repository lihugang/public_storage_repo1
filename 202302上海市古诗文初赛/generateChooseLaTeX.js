const json = require('./choose.json');
json.forEach((item, id) => {
    if (id > 100) return;
    console.log(`\\paragraph{
${id+1}. ${item.question.replace('     ', '\\qquad').replaceAll('_','\\_').replaceAll('<span>', '\\uline{').replaceAll('</span>', '}')} \\\\
    A. ${item.options[0].replace('     ', '\\qquad').replaceAll('_','\\_').replaceAll('<span>', '\\uline{').replaceAll('</span>', '}')} \\\\
    B. ${item.options[1].replace('     ', '\\qquad').replaceAll('_','\\_').replaceAll('<span>', '\\uline{').replaceAll('</span>', '}')} \\\\
    C. ${item.options[2].replace('     ', '\\qquad').replaceAll('_','\\_').replaceAll('<span>', '\\uline{').replaceAll('</span>', '}')} \\\\
    D. ${item.options[3].replace('     ', '\\qquad').replaceAll('_','\\_').replaceAll('<span>', '\\uline{').replaceAll('</span>', '}')}
}`);
})