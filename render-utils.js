
export function renderGoblins(goblin) {

    const goblinEl = document.createElement('div');

    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.textContent = `${goblin.name} ${goblin.hp} HP`;
    goblinEl.classList.add('goblin');
    goblinEl.append(nameEl, hpEl);
    return goblinEl;
}