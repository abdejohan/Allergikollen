export const neutral = {
  white: "#ffffff",
  s100: "#efeff6",
  s150: "#dfdfe6",
  s200: "#c7c7ce",
  s250: "#bbbbc2",
  s300: "#9f9ea4",
  s400: "#7c7c82",
  s500: "#515154",
  s600: "#38383a",
  s700: "#2d2c2e",
  s800: "#212123",
  s900: "#161617",
  black: "#000000",
};

export const primary = {
  light: "#E4F1EB",
  normal: "#AED6C4",
  dark: "#6AB493",
};

export const secondary = {
  light: "#ABC4BE",
  normal: "#679289",
  dark: "#445F59",
};

export const background = {
  light: "#112C7E",
  normal: "#0C1F5A",
  dark: "#071336",
};

export const danger = {
  color: "#EE2E31",
};

export const success = {
  color: "#09E85E",
};

export const warning = {
  color: "#FF7F11",
};

const applyOpacity = (hexColor, opacity) => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const transparent = {
  clear: "rgba(255, 255, 255, 0)",
  lightGray: applyOpacity(neutral.s300, 0.4),
  darkGray: applyOpacity(neutral.s800, 0.8),
};
