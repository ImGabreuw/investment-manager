class EfficiencyIndicator {
  constructor(
    readonly grossMargin: number | null,
    readonly EBITDAMargin: number | null,
    readonly EBITMargin: number | null,
    readonly netMargin: number | null
  ) {}
}

export { EfficiencyIndicator };
