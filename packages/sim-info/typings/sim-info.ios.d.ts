declare class TelephonyInfo extends NSObject {
  static alloc(): TelephonyInfo; // inherited from NSObject

  // eslint-disable-next-line @typescript-eslint/no-misused-new
  static new(): TelephonyInfo; // inherited from NSObject

  getData(): NSString;
}
