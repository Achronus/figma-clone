"use client";

import { Live } from "@/components/liveblocks";
import LeftSidebar from "@/layouts/LeftSidebar";
import Navbar from "@/layouts/Navbar";
import RightSidebar from "@/layouts/RightSidebar";
import { useEffect, useRef, useState } from "react";

import { fabric } from "fabric";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";
import { ActiveElement } from "@/types/canvas";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>(null);
  const isDrawing = useRef(false);

  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });

  const handleActiveElement = (element: ActiveElement) => {
    setActiveElement(element);

    selectedShapeRef.current = element?.value as string;
  };

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
      });
    });

    window.addEventListener("resize", () => {
      // @ts-ignore
      handleResize({ fabricRef });
    });
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar
        activeElement={activeElement}
        handleActiveElement={handleActiveElement}
      />

      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live canvasRef={canvasRef} />
        <RightSidebar />
      </section>
    </main>
  );
}
