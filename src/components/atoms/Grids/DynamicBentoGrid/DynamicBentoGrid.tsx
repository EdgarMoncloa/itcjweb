import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NextArrow } from "../../Buttons/NextArrow";
import { SlideCover } from "../../Animations/SlideCover";

// TODO EN EL PRIMER RENDER NO SE ESTA RENDERIZANDO PORQUE EL TAMANO ES 0

interface DynamicBentoGridProps {
  children: ReactNode[];
  defaultSize?: boolean;
  orientation?: "vertical" | "horizontal";
}

interface BlogInfo {
  id?: string;
  opacity?: number;
}

export const DynamicBentoGrid = ({
  children,
  defaultSize = false,
  orientation = "horizontal",
}: DynamicBentoGridProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const elementsData = children.map((item, index) => ({
    id: index.toString(),
    element: item,
  }));

  const [visibleCount, setVisibleCount] = useState<number>(elementsData.length);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [refreshingAnimation, setRefreshingAnimation] = useState<
    "left" | "none" | "right"
  >("none");

  const calculateVisibleItems = () => {
    const container = containerRef.current;
    if (!container) return;

    let containerSize;
    let scrollSize;

    if (orientation === "horizontal") {
      containerSize = container.clientWidth;
      scrollSize = container.scrollLeft;
    } else {
      containerSize = container.clientHeight;
      scrollSize = container.scrollTop;
    }

    const item = container.children[0] as HTMLElement;
    let localVisibleItems = 0;
    if (item) {
      let itemSize;
      if (orientation === "horizontal") {
        itemSize = item.offsetWidth;
      } else {
        itemSize = item.offsetHeight;
      }

      // Filtrar elementos que están completamente visibles
      const fullyVisibleItems: BlogInfo[] = [];
      elementsData.map((item, index) => {
        const itemStartEdge = index * itemSize - scrollSize; // Posición izquierda o top del elemento teniendo en cuenta el scroll
        const itemEndEdge = itemStartEdge + itemSize; // Posición derecha o bottom del elemento

        let opacity = 0;

        if (itemEndEdge <= 0) {
          // Completamente a la izquierda
          opacity = 0;
        } else if (itemStartEdge >= containerSize) {
          // Completamente a la derecha
          opacity = 0;
        } else {
          // Parte visible
          const visibleStartEdge = Math.max(itemStartEdge, 0); // Punto donde empieza a ser visible
          const visibleEndEdge = Math.min(itemEndEdge, containerSize); // Punto donde deja de ser visible

          const visibleSize = visibleEndEdge - visibleStartEdge; // Ancho o alto visible del elemento
          opacity = Math.max(0, Math.min(1, visibleSize / itemSize)); // Ajustar a rango 0 o 1
        }
        if (opacity === 1) localVisibleItems++;

        fullyVisibleItems.push({
          opacity: opacity < 1 ? 0 : 1,
          ...item,
        });
      });

      setVisibleCount(localVisibleItems > 0 ? localVisibleItems : 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    // Calcular elementos visibles al hacer scroll
    if (container) {
      container.addEventListener("scroll", calculateVisibleItems);
      window.addEventListener("resize", calculateVisibleItems);

      calculateVisibleItems(); // Calcular al montar

      return () => {
        container.removeEventListener("scroll", calculateVisibleItems);
        window.removeEventListener("resize", calculateVisibleItems);
      };
    }
  }, []);

  const handleScroll = (side: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    setRefreshingAnimation(side);

    setTimeout(() => {
      if (side === "left" && visibleIndex > 0) {
        setVisibleIndex(visibleIndex - visibleCount);
      } else if (
        side === "right" &&
        visibleIndex < elementsData.length - visibleCount
      ) {
        setVisibleIndex(visibleIndex + visibleCount);
      }
      setRefreshingAnimation("none");
    }, 400);
  };

  const classNames = [orientation, defaultSize ? "defaultSize" : ""];
  return (
    <StyledDynamicBentoGrid className={classNames.join(" ")}>
      <NextArrow
        direction={orientation === "horizontal" ? "left" : "up"}
        onClick={() => {
          handleScroll("left");
        }}
      />
      <StyledItemsContainer ref={containerRef}>
        {elementsData
          .slice(visibleIndex, visibleIndex + visibleCount)
          .map((item) => item.element)}
        <SlideCover
          isVisible={refreshingAnimation === "left"}
          position="top"
          haveOutAnimation
          animationDirection={
            orientation === "horizontal" ? "toRight" : "toBottom"
          }
        />
        <SlideCover
          isVisible={refreshingAnimation === "right"}
          position="top"
          haveOutAnimation
          animationDirection={orientation === "horizontal" ? "toLeft" : "toTop"}
        />
      </StyledItemsContainer>
      <NextArrow
        direction={orientation === "horizontal" ? "right" : "down"}
        onClick={() => {
          handleScroll("right");
        }}
      />
    </StyledDynamicBentoGrid>
  );
};

const StyledDynamicBentoGrid = styled.div`
  display: grid;
  grid-template-columns: var(--size-width-1-cols) 14fr var(--size-width-1-cols);
  width: 100%;
  overflow: hidden;
  height: var(--size-height-10-rows);
  gap: var(--size-gap-small);

  &.vertical {
    grid-template-columns: 100%;
    grid-template-rows: var(--size-width-1-cols) 14fr var(--size-width-1-cols);
  }

  &.defaultSize {
    &.vertical {
      width: 100%;
      height: 720px;
    }
  }
`;

const StyledItemsContainer = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  justify-content: space-evenly;
  align-content: space-evenly;
  position: relative;

  .horizontal & {
    grid-auto-columns: var(--size-width-4-cols);
    grid-auto-flow: column;
    grid-template-rows: 100%;
  }

  .vertical & {
    grid-auto-rows: var(--size-height-4-rows);
    grid-auto-flow: row;
    grid-template-columns: 100%;
  }
`;
