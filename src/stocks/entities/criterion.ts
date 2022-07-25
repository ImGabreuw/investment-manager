class Criterion {
  constructor(
    readonly targetIndicator: string,
    readonly idealValue: number,
    readonly tolerance: number
  ) {}
}

export { Criterion };
