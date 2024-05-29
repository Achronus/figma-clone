export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];
export const shapesPath = "/shapes";

export const shapeElements = [
  {
    icon: `${shapesPath}/rectangle.svg`,
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: `${shapesPath}/circle.svg`,
    name: "Circle",
    value: "circle",
  },
  {
    icon: `${shapesPath}/triangle.svg`,
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: `${shapesPath}/line.svg`,
    name: "Line",
    value: "line",
  },
  {
    icon: `${shapesPath}/image.svg`,
    name: "Image",
    value: "image",
  },
  {
    icon: `${shapesPath}/freeform.svg`,
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navItems = [
  {
    icon: `${shapesPath}/select.svg`,
    name: "Select",
    value: "select",
  },
  {
    icon: `${shapesPath}/rectangle.svg`,
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: `${shapesPath}/text.svg`,
    value: "text",
    name: "Text",
  },
  {
    icon: `${shapesPath}/delete.svg`,
    value: "delete",
    name: "Delete",
  },
  {
    icon: `${shapesPath}/reset.svg`,
    value: "reset",
    name: "Reset",
  },
  {
    icon: `${shapesPath}/comments.svg`,
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: `${shapesPath}/select.svg`,
  name: "Select",
  value: "select",
};
