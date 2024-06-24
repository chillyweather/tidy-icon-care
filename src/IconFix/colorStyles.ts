// @ts-nocheck

//& convert hex to rgb
function hexToRGB(hex: string) {
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
  
    const colors = {
      r: r,
      g: g,
      b: b,
    };
    return colors;
  }
  
  //& color style creation
  function createPaintStyle(name: string, hex: string) {
    const baseStyle = figma.createPaintStyle();
    baseStyle.name = name;
    const paint = {
      type: "SOLID",
      color: hexToRGB(hex),
    };
    baseStyle.paints = [paint];
    return baseStyle;
  }
  
  //& check if new styles already were created earlier
  function ifStyleExists(name: String) {
    const styles = figma.getLocalPaintStyles();
    return styles.some((style) => style.name === name);
  }
  
  //& find by name and return local style
  function localStyle(name: String) {
    const styles = figma.getLocalPaintStyles();
    const newStyle = styles.find((style) => style.name === name);
    return newStyle;
  }
  
  //& add color style to document
  function setColorStyle(name, hex) { //поменял ргб на хекс
    return ifStyleExists(name)
      ? localStyle(name)
      : createPaintStyle(name, hex);
  }
  
  //^ basic color styles
  export const dsWhite = setColorStyle("ds-admin/White", "FFFFFF");
  export const dsBlack = setColorStyle("ds-admin/Black", "000000");
  export const dsSecondaryColor = setColorStyle("ds-admin/Secondary Color", "08510D");
  export const dsDanger = setColorStyle("ds-admin/Danger", "A60404");
  export const dsPrimaryColor = setColorStyle("ds-admin/Primary Color", "FC5000");
  
  export default setColorStyle;
  