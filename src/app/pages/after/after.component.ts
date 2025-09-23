import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-after',
  imports: [RouterModule],
  templateUrl: './after.component.html',
  styleUrl: './after.component.css'
})
export class After {
  currentYear = new Date().getFullYear();
}
