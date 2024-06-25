var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@create-figma-plugin/utilities/lib/events.js
function on(name, handler) {
  const id = `${currentId}`;
  currentId += 1;
  eventHandlers[id] = { handler, name };
  return function() {
    delete eventHandlers[id];
  };
}
function invokeEventHandler(name, args) {
  let invoked = false;
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args);
      invoked = true;
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``);
  }
}
var eventHandlers, currentId, emit;
var init_events = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
    eventHandlers = {};
    currentId = 0;
    emit = typeof window === "undefined" ? function(name, ...args) {
      figma.ui.postMessage([name, ...args]);
    } : function(name, ...args) {
      window.parent.postMessage({
        pluginMessage: [name, ...args]
      }, "*");
    };
    if (typeof window === "undefined") {
      figma.ui.onmessage = function(args) {
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = args;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    } else {
      window.onmessage = function(event) {
        if (typeof event.data.pluginMessage === "undefined") {
          return;
        }
        const args = event.data.pluginMessage;
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = event.data.pluginMessage;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    }
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/absolute-position/get-absolute-position.js
function getAbsolutePosition(node) {
  return {
    x: node.absoluteTransform[0][2],
    y: node.absoluteTransform[1][2]
  };
}
var init_get_absolute_position = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/absolute-position/get-absolute-position.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-parent-node.js
function getParentNode(node) {
  const parentNode = node.parent;
  if (parentNode === null) {
    throw new Error(`\`node.parent\` is \`null\``);
  }
  return parentNode;
}
var init_get_parent_node = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-parent-node.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/compute-bounding-box.js
function computeBoundingBox(node) {
  if ("rotation" in node && node.rotation === 0) {
    const absolutePosition2 = getAbsolutePosition(node);
    const { width: width2, height: height2 } = node;
    return __spreadProps(__spreadValues({}, absolutePosition2), { height: height2, width: width2 });
  }
  const parentNode = getParentNode(node);
  const index = parentNode.children.indexOf(node);
  const group = figma.group([node], parentNode, index);
  const absolutePosition = getAbsolutePosition(group);
  const { width, height } = group;
  parentNode.insertChild(index, node);
  return __spreadProps(__spreadValues({}, absolutePosition), { height, width });
}
var init_compute_bounding_box = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/compute-bounding-box.js"() {
    init_get_absolute_position();
    init_get_parent_node();
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/compute-maximum-bounds.js
function computeMaximumBounds(nodes) {
  let maximumBounds = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: -1 * Number.MAX_VALUE,
      y: -1 * Number.MAX_VALUE
    }
  ];
  for (const node of nodes) {
    const { x, y, width, height } = computeBoundingBox(node);
    maximumBounds = [
      {
        x: Math.min(maximumBounds[0].x, x),
        y: Math.min(maximumBounds[0].y, y)
      },
      {
        x: Math.max(maximumBounds[1].x, x + width),
        y: Math.max(maximumBounds[1].y, y + height)
      }
    ];
  }
  return maximumBounds;
}
var init_compute_maximum_bounds = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/compute-maximum-bounds.js"() {
    init_compute_bounding_box();
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_events();
    init_compute_maximum_bounds();
    init_ui();
  }
});

// src/content/attachLabelToIcon.ts
function attachLabelToIcon(icon, spacing, labelInstance) {
  let label = labelInstance.children[0];
  if (label.type !== "TEXT") {
    label = figma.createText();
  }
  labelInstance.y = icon.y;
  labelInstance.x = icon.x + 26;
  label.characters = icon.name;
  label.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.04928385466337204,
        g: 0.04624933376908302,
        b: 0.04624933376908302
      },
      boundVariables: {}
    }
  ];
  const iconPlusLabel = figma.createFrame();
  iconPlusLabel.layoutPositioning = "AUTO";
  iconPlusLabel.layoutMode = "HORIZONTAL";
  iconPlusLabel.counterAxisSizingMode = "AUTO";
  iconPlusLabel.counterAxisAlignItems = "CENTER";
  iconPlusLabel.itemSpacing = spacing;
  iconPlusLabel.appendChild(icon);
  iconPlusLabel.appendChild(labelInstance);
  iconPlusLabel.fills = [];
  return iconPlusLabel;
}
var init_attachLabelToIcon = __esm({
  "src/content/attachLabelToIcon.ts"() {
    "use strict";
  }
});

// src/IconFix/vectorToOutline.ts
function vectorToOutline(vector) {
  if (vector.strokes.length > 0 && vector.strokeWeight !== 0 && vector.vectorPaths) {
    const parent = vector.parent;
    let outlinedStroke = outlineStroke(vector);
    if (outlinedStroke.vectorPaths.length && outlinedStroke.fillGeometry.length) {
      parent.appendChild(outlinedStroke);
      vector.remove();
    }
  }
}
function outlineStroke(vector) {
  let outlinedStroke = vector.outlineStroke();
  return outlinedStroke;
}
var init_vectorToOutline = __esm({
  "src/IconFix/vectorToOutline.ts"() {
    "use strict";
  }
});

// src/IconFix/iconCoreFix.ts
function iconCoreFix(node, iconSize) {
  let workingNode;
  if (node.type === "COMPONENT") {
    resizeIconContent(node, iconSize);
    return node;
  } else {
    workingNode = groupToComponent(node, iconSize);
  }
  const vectorObj = workingNode.findAllWithCriteria({
    types: [
      "VECTOR",
      "ELLIPSE",
      "POLYGON",
      "RECTANGLE",
      "STAR",
      "TEXT",
      "BOOLEAN_OPERATION"
    ]
  });
  vectorObj.forEach((vector) => {
    if (vector.name === "ic")
      return;
    if (vector.strokes.length === 0 && vector.fills.length === 0) {
      vector.remove();
    } else {
      vectorToOutline(vector);
    }
  });
  workingNode.name = workingNode.name.toLowerCase();
  const flattened = unionAndFlatten(workingNode);
  resizeIconContent(flattened, iconSize);
  return flattened;
}
function isStrangeVector(node) {
  if (node.children.length !== 1)
    return false;
  const child = node.children[0];
  return child.type === "VECTOR" && child.fillGeometry.length !== 1;
}
function unionAndFlatten(workingNode) {
  if (workingNode.children[0].type === "BOOLEAN_OPERATION" || isStrangeVector(workingNode)) {
    return workingNode;
  }
  const copy = workingNode.clone();
  try {
    workingNode.strokes = [];
    figma.union(workingNode.children, workingNode);
    figma.flatten(workingNode.children);
    copy.remove();
    return workingNode;
  } catch (error) {
    copy.fills = [{ type: "SOLID", color: { r: 0.996, g: 0.576, b: 0.729 } }];
    return copy;
  }
}
function groupToComponent(node, iconSize) {
  const wrapper = figma.createComponent();
  wrapper.resize(iconSize, iconSize);
  wrapper.x = node.x;
  wrapper.y = node.y;
  node.parent.appendChild(wrapper);
  wrapper.appendChild(node);
  wrapper.name = node.name;
  wrapper.fills = [];
  wrapper.findAllWithCriteria({
    types: ["FRAME", "GROUP"]
  }).forEach((group) => {
    figma.ungroup(group);
  });
  return wrapper;
}
function resizeIconContent(workingNode, iconSize) {
  const flatVector = workingNode.children[0];
  if (flatVector && flatVector.type === "BOOLEAN_OPERATION" && flatVector.children && flatVector.children.length === 1) {
    const child = flatVector.children[0];
    if (child && child.type === "VECTOR" && child.width === flatVector.width && child.height === flatVector.height) {
      child.x = 0;
      child.y = 0;
    }
  }
  if (!flatVector || flatVector.type !== "VECTOR" && flatVector.type !== "BOOLEAN_OPERATION")
    return;
  if (flatVector.type === "BOOLEAN_OPERATION" && flatVector.children) {
    flatVector.children.forEach((child) => {
      if (child.type === "VECTOR") {
        child.constraints = {
          horizontal: "MIN",
          vertical: "MIN"
        };
      }
    });
  }
  flatVector.name = "ic";
  if (iconSize === 16) {
    const scale = 14 / Math.max(flatVector.width, flatVector.height);
    flatVector.resize(flatVector.width * scale, flatVector.height * scale);
  } else if (iconSize === 20) {
    const scale = 18 / Math.max(flatVector.width, flatVector.height);
    flatVector.resize(flatVector.width * scale, flatVector.height * scale);
  } else if (iconSize === 24) {
    const scale = 20 / Math.max(flatVector.width, flatVector.height);
    flatVector.resize(flatVector.width * scale, flatVector.height * scale);
  } else if (iconSize === 32) {
    const scale = 24 / Math.max(flatVector.width, flatVector.height);
    flatVector.resize(flatVector.width * scale, flatVector.height * scale);
  }
  flatVector.x = workingNode.width / 2 - flatVector.width / 2;
  flatVector.y = workingNode.height / 2 - flatVector.height / 2;
  try {
    flatVector.constraints = {
      horizontal: "SCALE",
      vertical: "SCALE"
    };
  } catch (error) {
    workingNode.fills = [
      { type: "SOLID", color: { r: 0.996, g: 0.576, b: 0.729 } }
    ];
  }
}
var init_iconCoreFix = __esm({
  "src/IconFix/iconCoreFix.ts"() {
    "use strict";
    init_vectorToOutline();
  }
});

// src/IconFix/iconize.ts
function iconize(nodes, iconSize) {
  if (nodes[0] === void 0) {
    figma.notify("please, select an icon, uncertainity kills me!");
    figma.closePlugin();
    return;
  }
  const result = [];
  for (const node of nodes) {
    let workingNode = node;
    if (node.type === "INSTANCE") {
      workingNode = node.detachInstance();
    }
    const convertedFrame = iconCoreFix(workingNode, iconSize);
    result.push(convertedFrame);
  }
  return result;
}
var init_iconize = __esm({
  "src/IconFix/iconize.ts"() {
    "use strict";
    init_iconCoreFix();
  }
});

// src/description/add-description/data.ts
var keyboardsObj;
var init_data = __esm({
  "src/description/add-description/data.ts"() {
    "use strict";
    keyboardsObj = {
      q: "/",
      w: "'",
      e: "\u05E7",
      r: "\u05E8",
      t: "\u05D0",
      y: "\u05D8",
      u: "\u05D5",
      i: "\u05DF",
      o: "\u05DD",
      p: "\u05E4",
      a: "\u05E9",
      s: "\u05D3",
      d: "\u05D2",
      f: "\u05DB",
      g: "\u05E2",
      h: "\u05D9",
      j: "\u05D7",
      k: "\u05DC",
      l: "\u05DA",
      z: "\u05D6",
      x: "\u05E1",
      c: "\u05D1",
      v: "\u05D4",
      b: "\u05E0",
      n: "\u05DE",
      m: "\u05E6",
      Q: "/",
      W: "'",
      E: "\u05E7",
      R: "\u05E8",
      T: "\u05D0",
      Y: "\u05D8",
      U: "\u05D5",
      I: "\u05DF",
      O: "\u05DD",
      P: "\u05E4",
      A: "\u05E9",
      S: "\u05D3",
      D: "\u05D2",
      F: "\u05DB",
      G: "\u05E2",
      H: "\u05D9",
      J: "\u05D7",
      K: "\u05DC",
      L: "\u05DA",
      Z: "\u05D6",
      X: "\u05E1",
      C: "\u05D1",
      V: "\u05D4",
      B: "\u05E0",
      N: "\u05DE",
      M: "\u05E6"
    };
  }
});

// src/description/add-description/addDescription.ts
function addComponenetDescription(elements, isStatus = true, status = "\u{1F7E3} To do", isMisprint = true, isGuidelines = true, changeDescription = "add", hexColor) {
  const statuses = [
    "\u{1F7E3} To do",
    "\u{1F7E0} In progress",
    "\u{1F535} Waiting for review",
    "\u{1F534} Stuck",
    "\u{1F7E2} Completed",
    "\u26AA\uFE0F TBD"
  ];
  elements.map((element) => {
    const nameArray = element.name.split("");
    const newName = nameArray.map((letter) => {
      if (keyboardsObj[letter]) {
        return keyboardsObj[letter];
      } else {
        return letter;
      }
    });
    let guideLines = `\u{1F4DD}This element **${element.name}** is used for...
\u{1F3A8} #${hexColor}`;
    let misprint = `---------------------------------------------------- misprint: ${newName.join(
      ""
    )}`;
    buildDescription(
      element,
      isStatus,
      status,
      isMisprint,
      isGuidelines,
      changeDescription,
      guideLines,
      misprint
    );
  });
  function buildDescription(element, isStatus2, status2, isMisprint2, isGuidelines2, changeDescription2, guideLines, misprint) {
    if (!isMisprint2)
      misprint = "";
    if (!isGuidelines2)
      guideLines = "";
    if (changeDescription2 === "add") {
      if (element.description && element.description.length) {
        const descriptionArray = element.description.split("\n");
        const currentStatus = descriptionArray.find(
          (string) => statuses.includes(string)
        );
        if (currentStatus && isStatus2 && status2 !== "") {
          const index = descriptionArray.indexOf(currentStatus);
          descriptionArray[index] = status2;
        } else if (isStatus2 && status2 !== "") {
          descriptionArray.unshift(status2);
        }
        const currentGuidelines = descriptionArray.find(
          (string) => string.startsWith("\u{1F4DD}")
        );
        if (!currentGuidelines && isGuidelines2) {
          descriptionArray.push(guideLines);
        }
        const currentMisprint = descriptionArray.find(
          (string) => string.startsWith("-")
        );
        if (currentMisprint) {
          const index = descriptionArray.indexOf(currentMisprint);
          descriptionArray.splice(index, 1);
          descriptionArray.push(currentMisprint);
        } else if (!currentMisprint && isMisprint2) {
          descriptionArray.push(misprint);
        }
        element.description = `${descriptionArray.join("\n")}`;
      } else {
        element.description = `${isStatus2 ? status2 : ""}

        ${isGuidelines2 ? guideLines : ""}

        ${isMisprint2 ? misprint : ""}`;
      }
    } else {
      element.description = `${isStatus2 ? status2 : ""}

      ${isGuidelines2 ? guideLines : ""}

      ${isMisprint2 ? misprint : ""}`;
    }
  }
}
var init_addDescription = __esm({
  "src/description/add-description/addDescription.ts"() {
    "use strict";
    init_data();
  }
});

// src/content/buildIconGrid.ts
function buildIconColumn(rows, iconDist, rowDist, columnDist, hexColor, opacity, iconSize, addMetaData) {
  const selection = figma.currentPage.selection;
  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);
  const iconSizeValue = iconSize.replace(/[\D]+$/, "");
  const selectedElements = iconize(selection, +iconSizeValue);
  if (!(selectedElements == null ? void 0 : selectedElements.length))
    return;
  const bounds = computeMaximumBounds(selectedElements);
  selectedElements.forEach((element) => {
    const vector = element.children[0];
    if (!vector)
      return;
    if (vector.fills[0].type === "SOLID") {
      figma.variables.setBoundVariableForPaint(vector.fills[0], "color", null);
      const fillsCopy = JSON.parse(JSON.stringify(vector.fills));
      fillsCopy[0] = figma.variables.setBoundVariableForPaint(
        fillsCopy[0],
        "color",
        null
      );
      vector.fills = fillsCopy;
      const updated = figma.util.solidPaint(
        `#${hexColorValue}`,
        vector.fills[0]
      );
      vector.fills = [updated];
    }
  });
  function addOpacityToHex(hex, opacity2) {
    opacity2 = Math.max(0, Math.min(1, opacity2));
    const alphaHex = Math.round(opacity2 * 255).toString(16).padStart(2, "0");
    return hex + alphaHex;
  }
  function cleanOpacityValue(input) {
    const cleanedValue = input.replace(/[\D]+$/, "");
    return +cleanedValue / 100;
  }
  if (addMetaData) {
    addComponenetDescription(
      selectedElements,
      true,
      "\u{1F7E3} To do",
      true,
      true,
      "replace",
      hexColor
    );
  }
  const label = figma.createComponent();
  const labelTextNode = figma.createText();
  labelTextNode.characters = "Label";
  label.appendChild(labelTextNode);
  label.name = "label";
  label.layoutMode = "HORIZONTAL";
  label.layoutSizingVertical = "HUG";
  if (!selectedElements)
    return;
  const selectionParent = selectedElements[0].parent;
  const limit = rows;
  const xP = selectedElements[0].x;
  const yP = selectedElements[0].y;
  if (selectedElements.length === 1) {
    const iconPlusLabel = attachLabelToIcon(
      selectedElements[0],
      iconDist,
      label.createInstance()
    );
    iconPlusLabel.x = xP;
    iconPlusLabel.y = yP;
    selectionParent == null ? void 0 : selectionParent.appendChild(iconPlusLabel);
  }
  if (selectedElements.length > 1) {
    const rows2 = [];
    selectedElements.forEach((item) => {
      rows2.push(item);
    });
    const result = rows2.sort((a, b) => {
      let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    if (limit > 0) {
      const iconFrame = figma.createFrame();
      iconFrame.layoutPositioning = "AUTO";
      iconFrame.layoutMode = "HORIZONTAL";
      iconFrame.counterAxisAlignItems = "MIN";
      iconFrame.counterAxisSizingMode = "AUTO";
      iconFrame.name = "icon frame";
      const iconGrid = splitArray(result, limit);
      iconGrid.forEach((group) => {
        const newColumn = createColumn();
        group.forEach((item) => {
          const row = attachLabelToIcon(item, iconDist, label.createInstance());
          row.name = "icon+label";
          newColumn.appendChild(row);
        });
        newColumn.itemSpacing = rowDist;
        iconFrame.appendChild(newColumn);
      });
      iconFrame.itemSpacing = columnDist;
      selectionParent == null ? void 0 : selectionParent.appendChild(iconFrame);
      iconFrame.x = bounds[0].x;
      iconFrame.y = bounds[0].y;
    }
  }
  label.remove();
}
function createColumn() {
  const iconColumn = figma.createFrame();
  iconColumn.layoutPositioning = "AUTO";
  iconColumn.layoutMode = "VERTICAL";
  iconColumn.counterAxisAlignItems = "MIN";
  iconColumn.counterAxisSizingMode = "AUTO";
  iconColumn.name = "icon column";
  return iconColumn;
}
function splitArray(array, chunkSize) {
  const resArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    resArray.push(chunk);
  }
  return resArray;
}
var buildIconGrid_default;
var init_buildIconGrid = __esm({
  "src/content/buildIconGrid.ts"() {
    "use strict";
    init_attachLabelToIcon();
    init_iconize();
    init_addDescription();
    init_lib();
    buildIconGrid_default = buildIconColumn;
  }
});

// src/code.ts
var code_exports = {};
__export(code_exports, {
  default: () => code_default
});
async function code_default() {
  await loadFonts();
  const saveData = await figma.clientStorage.getAsync("params");
  if (saveData) {
    emit("SAVED_DATA", saveData);
  }
  const localData = saveData || {};
  on(
    "SEND",
    async function setData({
      rows,
      iconSpacing,
      rowSpacing,
      columnSpacing,
      hexColor,
      opacity,
      iconSize,
      addMetaData
    }) {
      buildIconGrid_default(
        +rows,
        +iconSpacing,
        +rowSpacing,
        +columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData
      );
      savePluginData(
        localData,
        rows,
        iconSpacing,
        rowSpacing,
        columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData
      );
    }
  );
}
function savePluginData(localData, rows, iconSpacing, rowSpacing, columnSpacing, hexColor, opacity, iconSize, addMetaData) {
  localData.rows = rows;
  localData.iconSpacing = iconSpacing;
  localData.rowSpacing = rowSpacing;
  localData.columnSpacing = columnSpacing;
  localData.hexColor = hexColor;
  localData.opacity = opacity;
  localData.iconSize = iconSize;
  localData.addMetaData = addMetaData;
  figma.clientStorage.setAsync("params", localData);
}
var loadFonts;
var init_code = __esm({
  "src/code.ts"() {
    "use strict";
    init_lib();
    init_buildIconGrid();
    loadFonts = async () => {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    };
    showUI({ height: 404, width: 300 });
  }
});

// <stdin>
var modules = { "src/code.ts--default": (init_code(), __toCommonJS(code_exports))["default"] };
var commandId = true ? "src/code.ts--default" : figma.command;
modules[commandId]();
