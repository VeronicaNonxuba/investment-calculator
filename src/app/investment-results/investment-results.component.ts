import { Component, inject, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent { 
  private _service = inject(InvestmentService);

  results = computed(() => this._service.resultsData());  
  isCalcDone = computed(() => this._service.isCalculationDone()); 
  
}

