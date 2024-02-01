import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  //ngOnInit(): void {}

  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;



constructor(private produitService: ProduitService, private router: Router) { }

ngOnInit() {
  this.categories = this.produitService.listeCategories();
  }


addProduit(){
// console.log(this.newProduit);
  this.newCategorie =
  this.produitService.consulterCategorie(this.newIdCat);
  this.newProduit.categorie = this.newCategorie;
  this.produitService.ajouterProduit(this.newProduit);
  this.router.navigate(['produits']);
  }
}


