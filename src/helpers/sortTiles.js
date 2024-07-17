export function sortTiles(tiles, sort) {
  if (sort) {
    return Object.entries(tiles).sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
  return Object.entries(tiles);
}
