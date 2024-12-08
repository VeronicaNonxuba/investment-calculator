import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentService } from './investment.service';
import { InvestmentOutput } from './investment-output.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, InvestmentResultsComponent],
})
export class AppComponent {  
  
}
