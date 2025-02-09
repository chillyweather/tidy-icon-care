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

export function checkColorsInIcon(node: SceneNode) {
  if (!("children" in node) || node.children.length === 0) return;

  const elements = node.findAllWithCriteria({
    types: TYPES,
  });

  const paints = new Set<string>();

  for (const element of elements) {
    findAllColors(element, paints);
  }

  return Array.from(paints).map((paint) => JSON.parse(paint));
}

function findAllColors(node: SceneNode, paints: Set<string>) {
  if ("fills" in node && Array.isArray(node.fills)) {
    for (const fill of node.fills) {
      if (fill.type === "SOLID" && fill.color) {
        const paint = {
          color: fill.color,
          opacity: fill.opacity !== undefined ? fill.opacity : 1,
        };
        paints.add(JSON.stringify(paint));
      }
    }
  }

  if ("children" in node) {
    for (const child of node.children) {
      findAllColors(child, paints);
    }
  }
}
