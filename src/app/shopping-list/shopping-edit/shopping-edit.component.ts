import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, AfterViewInit {
  // @ViewChild('nameInput',{static: true}) nameInput;
  @ViewChild('nameInput', {  static: true  }) nameInput: ElementRef;
  @ViewChild('amountInput', {  static: true  }) amountInput: ElementRef;
  amount;
  constructor(private shoppingService: ShoppingService) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  onAdd() {
    // console.log(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    const ingredient = {name:this.nameInput.nativeElement.value, amount: parseInt(this.amountInput.nativeElement.value)}
    this.shoppingService.addIngredient(ingredient);
  }

}
