const myEmojis = [
    {'monday': ['☕️', '🏭', '☕️', '🏠', '😸', '👨‍💻', '🎨']},
    {'tuesday': ['☕️', '🏭', '☕️', '🏠', '😸', '👨‍💻', '📖']},
    {'wednesday': ['☕️', '🏭', '☕️', '🏠', '😸', '👨‍💻', '📖']},
    {'thursday': ['☕️', '🏭', '☕️', '🏠', '😸', '👨‍💻', '🎨']},
    {'friday': ['☕️', '🏭', '☕️', '🏠', '😸', '👨‍💻', '📖']},
    {'saturday': ['☕️', '😸', '👨‍💻', '📖', '🍺🍔🎮' ]},
    {'sunday': ['☕️', '😸', '🎨', '🍷🍕', '📺']},
];

const emojiInput = document.getElementById('emoji-input');
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');

renderEmojis();

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        for (let key in myEmojis[i]) {
            const dayEl = document.getElementById(key);
            dayEl.textContent = '';
            myEmojis[i][key].map(item => {
                const emoji = document.createElement('span');
                emoji.textContent = item; 
                dayEl.append(emoji);
            });
        }
    }
}

pushBtn.addEventListener('click', function(){
    if (emojiInput.value) {
        const selectedRow = document.querySelector(['input:checked']).nextElementSibling.nextElementSibling.id;
        for (let i = 0; i < myEmojis.length; i++) {
            if (myEmojis[i].hasOwnProperty(selectedRow)) {
                myEmojis[i][selectedRow].push(emojiInput.value);
            }
        }
        emojiInput.value = '';
        renderEmojis();
    }
});

unshiftBtn.addEventListener('click', function(){
    if (emojiInput.value) {
        const selectedRow = document.querySelector(['input:checked']).nextElementSibling.nextElementSibling.id;
        for (let i = 0; i < myEmojis.length; i++) {
            if (myEmojis[i].hasOwnProperty(selectedRow)) {
                myEmojis[i][selectedRow].unshift(emojiInput.value);
            }
        }
        emojiInput.value = '';
        renderEmojis();
    }
});

popBtn.addEventListener("click", function(){
    const selectedRow = document.querySelector(['input:checked']).nextElementSibling.nextElementSibling.id;
    for (let i = 0; i < myEmojis.length; i++) {
        if (myEmojis[i].hasOwnProperty(selectedRow)) {
            myEmojis[i][selectedRow].pop();
        }
    }
    renderEmojis();
});

shiftBtn.addEventListener("click", function(){
    const selectedRow = document.querySelector(['input:checked']).nextElementSibling.nextElementSibling.id;
    for (let i = 0; i < myEmojis.length; i++) {
        if (myEmojis[i].hasOwnProperty(selectedRow)) {
            myEmojis[i][selectedRow].shift();
        }
    }
    renderEmojis();
});