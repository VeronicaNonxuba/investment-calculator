import { Component, signal, inject  } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  data = signal<InvestmentInput>({
    initialInvestment : 0,
    annualInvestment :0,
    expectedReturn : 5,
    duration : 10
  });


 private _service = inject(InvestmentService);

  onSubmit(){ 
    this._service.calculateInvestmentResults(this.data());
    this.resetFigures();
  }

  resetFigures(){
    this.data.set({
      initialInvestment : 0,
      annualInvestment :0,
      expectedReturn : 5,
      duration : 10
    });
  }
  
}
