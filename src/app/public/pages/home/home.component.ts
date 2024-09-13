import { Component } from '@angular/core';
import {ToolbarContentComponent} from "../../components/toolbar-content/toolbar-content.component";
import {BiographyCardComponent} from "../../../biographies/components/biography-card/biography-card.component";
import {FooterContentComponent} from "../../components/footer-content/footer-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarContentComponent,
    BiographyCardComponent,
    FooterContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
