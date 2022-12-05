const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

const card = document.querySelector('.ninong');

no.addEventListener('click', () => {
    let pos1 = Math.floor(Math.random() * 75);
    let pos2 = Math.floor(Math.random() * -300);
    no.style.position = 'absolute';
    no.style.transform = `translate(${pos1}px, ${pos2}px)`;
});

yes.addEventListener('click', () => {
    yes.style.display = 'none';
    no.style.display = 'none';
    card.style.backgroundImage = "url('second.png')"; // second picture kpaag nag yes na
    document.body.style.backgroundColor = '#dedede'
});