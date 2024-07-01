type OutlineableNode =
  | VectorNode
  | BooleanOperationNode
  | EllipseNode
  | PolygonNode
  | RectangleNode
  | StarNode
  | TextNode;
type ParentNode = GroupNode | FrameNode | BooleanOperationNode;

const ERROR_NO_STROKE = "No stroke to outline";
const PROPERTY_VECTOR_PATHS = "vectorPaths";
const PROPERTY_FILL_GEOMETRY = "fillGeometry";

/**
 * Converts a vector node's stroke to an outline.
 * @param vector The vector node to process.
 */
export function vectorToOutline(vector: OutlineableNode): void {
  if (!isOutlineable(vector)) return;

  const parent = vector.parent as ParentNode;
  let outlinedStroke: OutlineableNode;

  try {
    outlinedStroke = createOutlinedStroke(vector);
  } catch (error) {
    console.error("Failed to create outlined stroke:", error);
    return;
  }

  if (isValidOutlinedStroke(outlinedStroke)) {
    parent.appendChild(outlinedStroke);
    vector.remove();
  }
}

/**
 * Checks if a node can be outlined.
 */
function isOutlineable(node: OutlineableNode): boolean {
  return (
    node.strokes.length > 0 &&
    node.strokeWeight !== 0 &&
    PROPERTY_VECTOR_PATHS in node
  );
}

/**
 * Creates an outlined stroke from a vector node.
 */
function createOutlinedStroke(vector: OutlineableNode): OutlineableNode {
  if (vector.strokes.length === 0 || vector.strokeWeight === 0) {
    throw new Error(ERROR_NO_STROKE);
  }

  const outlinedStroke = vector.outlineStroke() as OutlineableNode;
  // outlinedStroke.x = vector.x;
  // outlinedStroke.y = vector.y;

  return outlinedStroke;
}

/**
 * Checks if the outlined stroke is valid.
 */
function isValidOutlinedStroke(node: OutlineableNode): boolean {
  return (
    PROPERTY_VECTOR_PATHS in node &&
    PROPERTY_FILL_GEOMETRY in node &&
    node.vectorPaths &&
    node.fillGeometry &&
    node.vectorPaths.length > 0 &&
    node.fillGeometry.length > 0
  );
}
