export function checkColorsInIcon(node: SceneNode) {
  const TYPES: (
    | "VECTOR"
    | "ELLIPSE"
    | "POLYGON"
    | "RECTANGLE"
    | "STAR"
    | "TEXT"
    | "BOOLEAN_OPERATION"
  )[] = [
    "VECTOR",
    "ELLIPSE",
    "POLYGON",
    "RECTANGLE",
    "STAR",
    "TEXT",
    "BOOLEAN_OPERATION",
  ];

  if (!("children" in node) || node.children.length == 0) return;

  const elements = node.findAllWithCriteria({
    types: TYPES,
  });

  const paints: { color: RGB; opacity: number }[] = [];

  for (const element of elements) {
    findAllColors(element, paints);
  }

  const uniquePaints = getUniquePaints(paints);
  return uniquePaints;
}
function getUniquePaints(paints: { color: RGB; opacity: number }[]) {
  const uniquePaints = paints.filter(
    (paint, index, self) =>
      index ===
      self.findIndex(
        (p) =>
          p.color.r === paint.color.r &&
          p.color.g === paint.color.g &&
          p.color.b === paint.color.b &&
          p.opacity === paint.opacity
      )
  );
  return uniquePaints;
}
function findAllColors(
  element:
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & BooleanOperationNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & VectorNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & StarNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & EllipseNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & PolygonNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & RectangleNode)
    | ({
        type:
          | "VECTOR"
          | "ELLIPSE"
          | "POLYGON"
          | "RECTANGLE"
          | "STAR"
          | "TEXT"
          | "BOOLEAN_OPERATION";
      } & TextNode),
  paints: any[]
) {
  if (Array.isArray(element.fills) && element.fills.length > 0) {
    const firstFill = element.fills[0];
    getColorObject(firstFill);
  }
  if (Array.isArray(element.strokes) && element.strokes.length > 0) {
    const firstStroke = element.strokes[0];
    getColorObject(firstStroke);
  }

  function getColorObject(firstColor: any) {
    if (firstColor.type === "SOLID") {
      const color = firstColor.color;
      const opacity = firstColor.opacity;
      paints.push({ color, opacity });
    }
  }
}
