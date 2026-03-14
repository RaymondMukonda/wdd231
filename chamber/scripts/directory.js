
const url = 'data/members.json';
const container = document.querySelector('#members');

async function getMembers(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members){
    members.forEach(member=>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    })
}

getMembers();

// grid list toggle
document.getElementById("gridBtn").addEventListener("click",()=>{
container.classList.add("grid");
container.classList.remove("list");
});

document.getElementById("listBtn").addEventListener("click",()=>{
container.classList.add("list");
container.classList.remove("grid");
});

// menu toggle
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", ()=>{
navMenu.classList.toggle("open");
});

// footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
