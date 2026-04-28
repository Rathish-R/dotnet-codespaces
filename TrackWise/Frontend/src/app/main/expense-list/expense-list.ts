import { Component } from '@angular/core';
import { Expenses } from '../../shared/expenseList';
import { Expense } from '../../shared/model/Expense';
@Component({
  selector: 'app-expense-list',
  imports: [],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseListComponent {

  public expenses:Expense[]=Expenses;
}
