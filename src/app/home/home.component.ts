import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatGridListModule, FlexLayoutModule, FlexLayoutServerModule, FooterComponent]
})
export class HomeComponent {
  constructor(private router: Router){}

  signIn(){
    this.router.navigate(['/signIn']);
  }
}
