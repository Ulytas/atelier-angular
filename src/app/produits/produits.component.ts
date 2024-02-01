import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})


export class ProduitsComponent implements OnInit {
  produits : Produit[];
  idProduit! : number;
  nomProduit! : string;
  prixProduit! : number;
  dateCreation! : Date ;
  categorie! : Categorie;
  ngOnInit(): void {}
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }
    supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}

}











