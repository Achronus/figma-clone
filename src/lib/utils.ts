import { shapesPath } from "@/constants";
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
        icon: `${shapesPath}/rectangle.svg`,
        name: "Rectangle",
      };

    case "circle":
      return {
        icon: `${shapesPath}/circle.svg`,
        name: "Circle",
      };

    case "triangle":
      return {
        icon: `${shapesPath}/triangle.svg`,
        name: "Triangle",
      };

    case "line":
      return {
        icon: `${shapesPath}/line.svg`,
        name: "Line",
      };

    case "i-text":
      return {
        icon: `${shapesPath}/text.svg`,
        name: "Text",
      };

    case "image":
      return {
        icon: `${shapesPath}/image.svg`,
        name: "Image",
      };

    case "freeform":
      return {
        icon: `${shapesPath}/freeform.svg`,
        name: "Free Drawing",
      };

    default:
      return {
        icon: `${shapesPath}/rectangle.svg`,
        name: shapeType,
      };
  }
};
