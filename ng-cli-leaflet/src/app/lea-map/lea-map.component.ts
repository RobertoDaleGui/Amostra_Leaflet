import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-lea-map',
  templateUrl: './lea-map.component.html',
  styleUrls: ['./lea-map.component.css']
})
export class LeaMapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([-23.6272432,-46.7094548], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    }).addTo(map);
  }
}
