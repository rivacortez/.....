import {Component, OnInit} from '@angular/core';
import {BiographyService} from "../../service/biography.service";
import {BiographyEntity} from "../../model/biography.entity";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatFooterRow} from "@angular/material/table";

@Component({
  selector: 'app-biography-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatCardTitle,
    MatCardSubtitle,
    MatFooterRow,
    MatCardFooter,
    MatCardHeader
  ],
  templateUrl: './biography-card.component.html',
  styleUrl: './biography-card.component.css'
})
export class BiographyCardComponent implements  OnInit{

  biographies: BiographyEntity[] = [];
  constructor(private biographyservice: BiographyService){

  }



  ngOnInit() {
    this.biographyservice.getBiographies().subscribe(
      data => {
        console.log("Data:", data);
        this.biographies = data;
      },
      error => console.error("failed:", error)
    );
  }

}
