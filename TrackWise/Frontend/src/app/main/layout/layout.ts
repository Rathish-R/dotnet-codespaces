import { Component } from '@angular/core';
import { ExpenseListComponent } from '../expense-list/expense-list';
@Component({
  selector: 'app-layout',
  imports: [ExpenseListComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
public userName :string ="Rathish";
}
