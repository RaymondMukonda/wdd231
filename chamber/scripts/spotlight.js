fetch("data/members.json")
.then(response=>response.json())
.then(data=>{

const spotlights=document.querySelector("#spotlights");

data.members.slice(0,3).forEach(member=>{

const div=document.createElement("div");

div.innerHTML=`
<h3>${member.name}</h3>
<p>${member.phone}</p>
`;

spotlights.appendChild(div);

});

});