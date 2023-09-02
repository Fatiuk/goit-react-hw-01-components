export function generatePastelColor() {
  const minColorValue = 100;

  let r, g, b;
  do {
    r = Math.floor(Math.random() * 156) + minColorValue;
    g = Math.floor(Math.random() * 156) + minColorValue;
    b = Math.floor(Math.random() * 156) + minColorValue;
  } while (r + g + b > 700);

  const colorHex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return colorHex;
}
