
btn.onclick =() =>{
    fetch('https://api.github.com/users/'+champ.value)
    .then(res => res.json())
    .then(data =>{
        output.textContent="";
        output.textContent = `Compte de ${data.login}`;
        const img =document.createElement("img");
        img.src = data.avatar_url;
        output.appendChild(img); 
    })
}