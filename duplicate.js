const name = ['abul', 'habul', 'kabul', 'habul', 'cabul']
function removeDuplicate(name) {
    const uniqueName = [];
    for (const element of name) {
        console.log(element);
        if (uniqueName.indexOf(element) == -1) {
            uniqueName.push(element);
        }
    }
    return uniqueName;
}
const unique = removeDuplicate(name);
console.log(unique);