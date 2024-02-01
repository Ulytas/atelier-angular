import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})


export class UpdateProduitComponent implements OnInit {
currentProduit = new Produit();
categories! : Categorie[];
updatedCatId! : number;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private produitService: ProduitService) { }
/* ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
console.log(this.currentProduit);
} */
ngOnInit(): void {
  this.categories = this.produitService.listeCategories();
  this.currentProduit =
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
  this.updatedCatId=this.currentProduit.categorie!.idCat;
  //   this.updatedCatId=this.currentProduit.categorie?.idCat;
  // .categorie?.idCat ou .categorie.idCat ne fonctionnent pas : avec "." pas possible et avec "?"
  // le type de categorie et idCat est undefined. On attend/expect updatedCatID de type number
  // d'être affecté à du type number. Avec "?" on ne sait pas mais avec "!" oui.
  }

updateProduit()
{ //console.log(this.currentProduit);
this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
this.produitService.updateProduit(this.currentProduit);
this.router.navigate(['produits']);
}
}
