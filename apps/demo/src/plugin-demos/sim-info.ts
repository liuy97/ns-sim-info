import { EventData, Page } from '@nativescript/core';
import { DemoSharedSimInfo } from '@demo/shared';
import { SimInfo } from 'ns-sim-info';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSimInfo {
  simData: string;
  load() {
    const simInfo = new SimInfo();
    simInfo
      .getData()
      .then((simData) => {
        this.simData = JSON.stringify(simData);
        console.log(this.simData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
