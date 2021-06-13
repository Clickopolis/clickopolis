export enum Era {
  Ancient,
  Classical,
  Medieval,
  Renaissance,
  Industrial,
  Modern,
  Atomic,
  Contemporary,
  Future,
}

export const getEraName = (era: Era) => {
  switch (era) {
    case Era.Ancient:
      return 'Ancient';
    case Era.Classical:
      return 'Classical';
    case Era.Medieval:
      return 'Medieval';
    case Era.Renaissance:
      return 'Renaissance';
    case Era.Industrial:
      return 'Industrial';
    case Era.Modern:
      return 'Modern';
    case Era.Atomic:
      return 'Atomic';
    case Era.Contemporary:
      return 'Contemporary';
    case Era.Future:
      return 'Future';
  }
};
