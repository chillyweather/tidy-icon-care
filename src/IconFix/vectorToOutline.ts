export function vectorToOutline(vector: any) {
  if (
    vector.strokes.length > 0 &&
    vector.strokeWeight !== 0 &&
    vector.vectorPaths
  ) {
    const parent = vector.parent;
    let outlinedStroke = outlineStroke(vector);

    if (
      outlinedStroke.vectorPaths.length &&
      outlinedStroke.fillGeometry.length
    ) {
      parent.appendChild(outlinedStroke);
      vector.remove();
    }
  }
}

function outlineStroke(vector: any) {
  const parent = vector.parent;
  if (vector.strokes.length > 0 && vector.strokeWeight !== 0) {
    const xPos = vector.x;
    const yPos = vector.y;
    const outlinedStroke = vector.outlineStroke();
    parent.appendChild(outlinedStroke);
    outlinedStroke.x = xPos;
    outlinedStroke.y = yPos;
    vector.remove();
  }
  return parent;
}
