import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  dateJour = new Date();
  films = [{ titre: 'Anges & Démons', affiche: '../assets/ange.jpg', duree: 120 },
  { titre: 'Coco', affiche: '../assets/coco.jpg', duree: 88 },
  { titre: 'Coeur Nomade', affiche: '../assets/nomade.bmp', duree: 97 }
  ];
  profil = ['Retraité,Autre,Etudiant'];


  constructor() { }

  ngOnInit() {
  }

}
