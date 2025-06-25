import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-main',
  standalone: true,
  imports: [
    CommonModule,
    //TranslateModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent {

}
