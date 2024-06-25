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
  let outlinedStroke = vector.outlineStroke();
  return outlinedStroke;
}
