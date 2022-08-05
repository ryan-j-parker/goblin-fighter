let goblins = [
    { name: 'Goblin 1', hp: 2 },
    { name: 'Goblin 2', hp: 3 },
    { name: 'Goblin 3', hp: 4 },
];

const goblinStableEl = document.querySelector('.goblin-stable');

for (let goblin of goblins) {
    const goblinEl = document.createElement('div');

    let emoji = '👺';
    if (goblin.hp <= 0) {
        emoji = '💀';
    }
    
    goblinEl.textContent = `${goblin.name} ${emoji} HP${goblin.hp}`;
    goblinEl.classList.add('each-goblin');

    goblinEl.addEventListener('click', () => {

    

    refreshGoblins();
    });

    goblinStableEl.append(goblinEl);
}