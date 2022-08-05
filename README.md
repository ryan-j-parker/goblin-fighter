## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


## User should be able to . . . 

## Events 
* On load, see the HP and names of at least two default goblins 2
* On submitting the 'challenge goblin' form, add a new goblin object (with 3 HP and a name) to state and display it to the DOM 2
* On clicking a goblin, it should tell the user whether they hit the goblin or not, then update state and DOM appropriately with new HP 3
* On clicking a goblin, it should tell the user whether the goblin hit the player or not, then update state and DOM appropriately with new HP 2
* The number of vanquished goblins should be visible when state changes. 2
*Render dead goblins differently, and disable clicking on them 2
When the user's HP is 0, launch a game over message 2

## Functions 
PURE: renderGoblin(goblin) : return DOM element` 2
IMPURE: displayGoblins() : clears DOM and appends goblin data to goblin list DOM node 2

## Stretch goal ideas
Change the player image to something stronger-looking every time they hit a new threshold (killed first goblin, killed three goblins, etc).
Change the player image based on their current health to show how worse-for-the-wear they've become.
Give goblins a random 'strength' property that determines how much damage they do to the player.
Give goblins a random 'agility' property that determines how often the play can hit them.
Give goblins a random 'dexterity' property that determines how often they hit the player.
Give the player a 'strength' property starting at 1 that determines how much damage they do to goblins. Every time a goblin dies, increment this property.
Add different kinds of monsters and render them differently by adding a 'type' property to the monster.

## HTML Setup
A 'destination' for:
player HP
list of living goblins
for each goblin show
their name
their HP
defeated goblins

## Clickables

Each goblin is clickable
On click . . .
* possibly decrmement this goblin's HP
* possibly decrment player HP
* possibly increment defeatedGoblins
* update the DOM with new goblin, player, and defeated goblin state. (render deated goblins differently)
New goblin form

On Submit . . .
* User has supplied a name and submitted the form
* Make a new goblin object with that user input
* Add that object to the array of goblins in state
* "update a list"
* clear out the list DOM
* loop through the goblins
* render a new goblin DOM element for each item
* append that element to the HTML
