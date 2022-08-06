import { renderGoblins } from './render-utils.js';

const goblinStableEl = document.querySelector('.goblin-stable');
const goblinsDefeatedEl = document.querySelector('.goblins-defeated');
const playerAvatarEl = document.querySelector('.player-avatar');

const form = document.querySelector('form');

const playerHPEl = document.querySelector('.player-hp');


let goblins = [
    { name: 'Goblin 1', hp: 2, },
    { name: 'Goblin 2', hp: 3, },
    { name: 'Goblin 3', hp: 4, },
];

let playerHP = 10;

let goblinsDefeated = 0;

displayGoblins();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newGoblinName = data.get('new-goblin-name');

    const newGoblin = { name: newGoblinName, hp: Math.floor(Math.random() * 6) + 3 };

    goblins.push(newGoblin);

    form.reset();
    displayGoblins();
});

function displayGoblins() {

    goblinStableEl.textContent = '';
    for (let goblin of goblins) {

        const goblinEl = renderGoblins(goblin);

        let emoji = '👺';
        if (goblin.hp <= 0) {
            emoji = '🔥';
        }

        goblinEl.textContent = `${goblin.name} ${emoji} ${goblin.hp} HP`;

        goblinEl.classList.add('each-goblin');


        goblinEl.addEventListener('click', () => {

            if (goblin.hp > 0 && playerHP > 0) {
                if (Math.random() > 0.5) {
                    goblin.hp--;
                    alert('You hit the goblin!');
                } else {
                    alert('You missed the goblin!');
                }

                if (Math.random() > 0.7) {
                    playerHP--;
                    alert('The goblin hit you!');
                }

                if (goblin.hp <= 0) {
                    goblinsDefeatedEl.textContent = `${goblinsDefeated} goblins have been defeated`;
                    goblinsDefeated++;
                    goblin.image = './assets/goblinOuch.jpg';
                }

                if (playerHP <= 0) {
                    playerAvatarEl.textContent = '🤕';
                    playerHPEl.textContent = playerHP;
                    alert('You have been defeated!');
                }

                if (goblinsDefeated === goblins.length) {
                    alert('You have defeated all the goblins!');
                }

                playerHPEl.textContent = playerHP;


                displayGoblins();
            }
        });

        goblinStableEl.append(goblinEl);
    }
}
displayGoblins();


