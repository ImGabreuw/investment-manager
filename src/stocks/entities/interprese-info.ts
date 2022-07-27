class InterpreseInfo {
  constructor(
    readonly name: string,
    readonly netWorth: number,
    readonly assets: number,
    readonly currentAssets: number,
    readonly grossDebt: number,
    readonly marketValue: number,
    readonly interpreseValue: number,
    readonly totalNumberOfPapers: number,
    readonly listingSegment: string,
    readonly freeFloat: number,
    readonly sectorOfActivity: string,
    readonly subsectorOfActivity: string,
    readonly segmentOfActivity: string,
  ) {}
}

export { InterpreseInfo };
