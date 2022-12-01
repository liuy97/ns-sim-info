import { Component } from '@angular/core';
import { SimInfo } from 'ns-sim-info';

@Component({
  selector: 'demo-sim-info',
  templateUrl: 'sim-info.component.html',
})
export class SimInfoComponent {
  simData: string;

  load(): void {
    const simInfo = new SimInfo();
    simInfo
      .getData()
      .then((simData) => {
        this.simData = JSON.stringify(simData);
      })
      .catch((error) => {
        this.simData = error.toString();
        console.error(error);
      });
  }
}
