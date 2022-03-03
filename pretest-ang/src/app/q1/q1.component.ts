import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss']
})
export class Q1Component implements OnInit {
  num: number = 0;
  dropdown: any = null;
  isPrime: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calNum() {
    if (this.num < 0) {
      this.num = 1;
    }
    this.num = Math.round(this.num);
    this.onChangeDD();
  }

  onChangeDD() {
    this.isPrime = this.checkPrime(this.num);
    if (this.dropdown != 'isPrime') {
      this.isPrime = !this.isPrime;
    }
  }

  checkPrime(num_in: number): boolean {
    for (let i = 2, s = Math.sqrt(num_in); i <= s; i++)
      if (num_in % i === 0) return false;
    return num_in > 1;
  }
}
