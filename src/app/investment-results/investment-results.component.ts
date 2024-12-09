import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
import { InvestmentOutput } from '../investment-output.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent { 
  private _service = inject(InvestmentService);

  get results(){
    return this._service.resultsData();  
  }

  get isCalcDone(){
   return this._service.isCalculationDone();
  }
  
}

