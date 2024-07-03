export function getSelectionGroupCoordinates(nodes: readonly SceneNode[]): {
  x: number;
  y: number;
} {
  if (nodes.length === 0) {
    throw new Error("No nodes selected");
  }

  let minX = Infinity;
  let minY = Infinity;

  nodes.forEach((node) => {
    if ("x" in node && "y" in node) {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
    } else if (isNodeWithBoundingBox(node)) {
      //@ts-ignore
      const bbox = node.absoluteBoundingBox;
      if (bbox) {
        minX = Math.min(minX, bbox.x);
        minY = Math.min(minY, bbox.y);
      }
    } else {
      // No changes needed for this case
    }
  });

  if (minX === Infinity || minY === Infinity) {
    throw new Error("Couldn't determine group coordinates");
  }

  return { x: minX, y: minY };
}

function isNodeWithBoundingBox(
  node: SceneNode
): node is GroupNode | FrameNode | ComponentNode | InstanceNode {
  return "absoluteBoundingBox" in node;
}
