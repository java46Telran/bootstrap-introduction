const root = document.getElementById('root');
root.innerHTML = `<ul>${getItems()}</ul>`
function range(from, length) {
    const res = [];
    for (let i = 0; i < length; i++) {
        res.push(i + from);
    }
    return res;
}
function getItems() {
    return range(1, 200).map(i => `<li> <img src="faiconDog2.png" ></li>`).join('');
}