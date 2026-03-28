const url =" https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
const typecolor ={

}

let getpokedata =()=> {
    //generate a random number betwwen 1 and 150 
    let id =Math.floor(Math.random()*150)+1;

    // combine the pokeapi url with pokemon id

    const finalurl = url+id;
  
    //fetch generated url 
    fetch(finalurl)
    .then((response) => response.json())
    .then((data) => {
      generatecard(data);
    });
    
};
 let generatecard =(data)=> {

const hp = data.stats[0].base_stat;

const imgsrc = data.sprites.other.dream_world.front_default;
const pokeName = data.name;
 const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
 const statSpeed =data.stats[5].base_stat;
 card.innerHTML = `<p id="hp"><span>HP</span>${hp} </p>
        <img src="${imgsrc}"/>
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
          
            
        </div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>Attacks</p>
            </div>
              <div>
                <h3>${statDefense}</h3>
                <p>Defense</p>
                
            </div>
              <div>
                <h3>${statSpeed}</h3>
                <p>Speed</p>
                
            </div>
        </div>`;
        appendTypes(data.types);

 };
 let appendTypes = (types) =>{
   
    types.forEach(items => {
        let span = document.createElement("span");
        span.textContent = items.type.name.toUpperCase();
        document.querySelector(".types").appendChild(span);
        
    });
    
 }
btn.addEventListener("click",getpokedata);
window.addEventListener("load",getpokedata);

