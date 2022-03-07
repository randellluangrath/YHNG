import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yh-customer-risk-factors-details',
  templateUrl: './customer-risk-factors-details.component.html',
  styleUrls: ['./customer-risk-factors-details.component.scss'],
})
export class CustomerRiskFactorsDetailsComponent implements OnInit {
  factors: IRiskFactor[] = [
    {
      abbreviation: 'MSB',
      title: 'Money Service Business',
      subtitle: 'Check Casher',
    },
    {
      abbreviation: 'CIB',
      title: 'Cash Intensive Business',
      subtitle: 'Private ATM Owner',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

interface IRiskFactor {
  abbreviation: string;
  title: string;
  subtitle: string;
}
