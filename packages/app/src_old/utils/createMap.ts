export interface MapTiles {
  terrain: string;
  features: string[];
}

export type Map = MapTiles[];

export interface MapOptions {}

export const createMap = (_opt: MapOptions): Map[] => {
  return [[], [], []];
};
