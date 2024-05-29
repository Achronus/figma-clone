import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const adjectives = [
  "Happy",
  "Creative",
  "Energetic",
  "Lively",
  "Dynamic",
  "Radiant",
  "Joyful",
  "Vibrant",
  "Cheerful",
  "Sunny",
  "Sparkling",
  "Bright",
  "Shining",
];

const animals = [
  "Dolphin",
  "Tiger",
  "Elephant",
  "Penguin",
  "Kangaroo",
  "Panther",
  "Lion",
  "Cheetah",
  "Giraffe",
  "Hippopotamus",
  "Monkey",
  "Panda",
  "Crocodile",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomName(): string {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return `${randomAdjective} ${randomAnimal}`;
}

export const getShapeInfo = (shapeType: string) => {
  switch (shapeType) {
    case "rect":
      return {
        icon: "/assets/shapes/rectangle.svg",
        name: "Rectangle",
      };

    case "circle":
      return {
        icon: "/assets/shapes/circle.svg",
        name: "Circle",
      };

    case "triangle":
      return {
        icon: "/assets/shapes/triangle.svg",
        name: "Triangle",
      };

    case "line":
      return {
        icon: "/assets/shapes/line.svg",
        name: "Line",
      };

    case "i-text":
      return {
        icon: "/assets/shapes/text.svg",
        name: "Text",
      };

    case "image":
      return {
        icon: "/assets/shapes/image.svg",
        name: "Image",
      };

    case "freeform":
      return {
        icon: "/assets/shapes/freeform.svg",
        name: "Free Drawing",
      };

    default:
      return {
        icon: "/assets/shapes/rectangle.svg",
        name: shapeType,
      };
  }
};
