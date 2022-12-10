let kingdoms = [{ name: "Curetus", phylums: [{ name: "Homo", genuses: [{ name: "Aquus", species: [{ name: "Tentacle Human" }, { name: "Aquatic Human" }] }, { name: "Terrus", species: "Land Human" }] }, { name: "Solis Facera", genuses: [{ name: "Insinuatis", species: [{ name: "Hamster" }, { name: "Rat" }] }, { name: "Rapax", species: [{ name: "Shark" }] }] }, { name: "Arthopodum", genuses: [{ name: "Arachnid", species: [{ name: "Spider" }] }, { name: "Superesse", species: [{ name: "Cockroach" }, { name: "Butterroach" }] }, { name: "Furantur", species: [{ name: "Mosquito" }, { name: "Flea" }] }] }, { name: "Natare", genuses: [{ name: "Transmutare", species: [{ name: "Goldfish" }] }] }] }, { name: "Botanica", phylums: [{ name: "Lux", genuses: [{ name: "Medicamentis", species: [{ name: "Grass" }] }, { name: "Aquarre", species: [{ name: "Algae" }] }] }] }];
// Directory structure : Kingdom --> Phylum --> Genus --> Species
let destination = document.getElementById("destination");
let unveilBtn = document.getElementById('unveil');
unveilBtn.addEventListener('click', unveil);

function unveil(){
    for(let i = 0; i < kingdoms.length; i++){
        buildElement("li", destination, `Kingdom: ${kingdoms[i].name}`);
        for(let j = 0; j < kingdoms[i].length; j++){

        }
    }
}

function buildElement(type, parent, content, id){
    let tempVariable = document.createElement(type);
    if(id){
        tempVariable.id = id;
    }
    if(content){
        tempVariable.innerHTML = content;
    }
    parent.append(tempVariable);
}