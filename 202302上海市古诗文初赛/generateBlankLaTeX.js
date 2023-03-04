const json = require('./blank.json');
json.forEach((item, id) => {
    console.log(`\\paragraph{${id+1}. ${item.map(item => {
    if (item.type === 'text') return item.value;
    else return '\\uline{\\qquad\\qquad\\qquad\\qquad}'
}).join('')}}`);
})
