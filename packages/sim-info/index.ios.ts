import { SimData } from './index';

export class SimInfo {
  /**
   * Return Data from multiple sims (serviceSubscriberCellularProviders) if possible
   * or return data from the active sim (subscriberCellularProvider)
   */
  getData(): Promise<SimData[]> {
    const telephonyInfo = TelephonyInfo.alloc();
    let data: SimData[];
    try {
      data = JSON.parse(String(telephonyInfo.getData()));
    } catch (e) {
      console.error(e);
      data = [];
    }

    if (data.length === 0) {
      return Promise.reject('Sim information is unaccessible');
    } else {
      return Promise.resolve(data);
    }
  }
}
