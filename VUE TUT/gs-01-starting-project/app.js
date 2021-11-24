// Vue.createApp({
//     data(){
//         return {
//             goals: [],
//             enteredValue: ''
//         };
//     },
//     methods: {
//         addGoal() {
//             this.goals.push(this.enteredValue);
//         }
//     }
// }).mount('#app');

const buttonEl = document.querySelector('button');
const intputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const eneteredvalue = intputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = eneteredvalue;
    listEl.appendChild(listItemEl);
    intputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);
