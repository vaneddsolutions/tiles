import { Component, OnInit } from '@angular/core';
import { TilesServiceService } from './tiles-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app works!';
  tiles: any

  constructor(private tilesServiceService:TilesServiceService) { }

  ngOnInit() {
    this.fetchTiles();
}

fetchTiles() {
    this.tilesServiceService.fetchTiles()
        .subscribe(
            (response) => {
              console.log("response", response)
              this.tiles = response;
            },
            (error) => {
                console.error(error);
            }
        );
}

}
