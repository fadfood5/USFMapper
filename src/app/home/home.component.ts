import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import data from '../../assets/buildings.json';

export interface Building {
  name: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  //Form validation group
  buildingsGroup = new FormGroup({
    buildingsSelect: new FormControl('', Validators.required)
  });

  //Form select element declaration
  buildingsList:Building[] = data as Building[];
  
  //Select value state
  selectedBuilding: string = "";
  selectedLink: string = "";

  constructor(private router: Router){};

  ngOnInit(): void {
  }

  changedSelection(val: Object): void{
    this.selectedLink = val.toString();
  }

  findBuilding(): void{
    window.location.href = this.selectedLink;
  }
}
