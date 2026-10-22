document.getElementById('t2-btn').addEventListener('click', () => {
    document.getElementById('t2-text').textContent = "Text changed!";
});

const t3Container = document.getElementById('t3-container');
document.getElementById('t3-color-btn').addEventListener('click', () => {
    t3Container.style.backgroundColor = "lightgreen";
});
document.getElementById('t3-size-btn').addEventListener('click', () => {
    t3Container.style.fontSize = "24px";
});

const t4List = document.getElementById('t4-list');
document.getElementById('t4-add-btn').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = "New Item";
    t4List.appendChild(li);
});
document.getElementById('t4-remove-btn').addEventListener('click', () => {
    if (t4List.lastChild) {
        t4List.removeChild(t4List.lastChild);
    }
});