let tabProduits=[
    {id: 1, libelle: "fleur1", stock: 15, prix: 15000, photo: "imgs/img1.jpg"},
    {id: 2, libelle: "fleur2", stock: 10, prix: 5000, photo: "imgs/img5.jpg"},
    {id: 3, libelle: "fleur3", stock: 25, prix: 12000, photo: "imgs/img6.jpg"},
    {id: 4, libelle: "fleur4", stock: 9, prix: 25000, photo: "imgs/img4.jpg"},

];
let tabPanier = [];
let article = document.getElementById("articles");
displayProducts(tabProduits);


function ajoutPanier(id){
    let produit = tabProduits.find(p => p.id == id);
    if(produit.stock > 0){
        let exist = tabPanier.find(p => p.id == id);
        if(exist){
            exist.quantite++;
        }else{
            produit.quantite=1;
            tabPanier.push(produit);
        }
        produit.stock --;
    }else{
        alert("Le stock de ce produit est epuise.");
    }
    displayProducts(tabProduits);

};

function displayPanier(tabProduits){
    contenuPanier.innerHTML = "";
    let som = 0;
    tabPanier.forEach((p,i) => {
        som += p.prix * p.quantite;
        var ligne = `
                        <tr>
                            <td><img src="${p.photo}" class="card-img-top" alt="..."></td>
                            <td>${p.libelle}</td>
                            <td>${p.quantite}</td>
                            <td>${p.prix}</td>
                            <td>${p.prix * p.quantite }</td>
                            <td>
                                <button type="button" class="btn btn-outline-success float-end" onclick="deleteProduct('${p.id}')">delete</button>
                            </td>
                        </tr> `  
                        contenuPanier.innerHTML += ligne;
                        document.getElementById('total').innerText = som + "Frcf";
    })

};

function deleteProduct(id) {
    tabPanier = tabPanier.filter(p => p.id != id);
    displayPanier();
}



function displayProducts(tabProduits){

    article.innerHTML = "";

    tabProduits.forEach((p,i) => {

        var card = ` <div class="card" style="width: 18rem;">
                        <img src="${p.photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${p.libelle}</h5>
                            <p class="card-text">${p.stock}---prix: ${p.prix}</p>
                            <a href="#" class="btn btn-primary" onclick ="ajoutPanier('${p.id}')">ajout panier</a>
                        </div>
                    </div> `
                    article.innerHTML += card; 
    });   

};