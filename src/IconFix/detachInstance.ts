export function detachInstance(node: SceneNode) {
  if (node.type === "INSTANCE") {
    return node.detachInstance();
  }
  return node;
}
