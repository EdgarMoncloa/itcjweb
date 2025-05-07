import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NextArrow } from "../../Buttons/NextArrow";
import { SlideCover } from "../../Animations/SlideCover";

// TODO EN EL PRIMER RENDER NO SE ESTA RENDERIZANDO PORQUE EL TAMANO ES 0

interface BlogsSectionProps {
  children: ReactNode[];
  defaultSize?: boolean;
}

interface BlogInfo {
  id?: string;
  opacity?: number;
}

export const DynamicBentoGrid = ({
  children,
  defaultSize = false,
}: BlogsSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const blogCards = children.map((item, index) => ({
    id: index.toString(),
    element: item,
  }));

  const [visibleCount, setVisibleCount] = useState<number>(blogCards.length);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [refreshingAnimation, setRefreshingAnimation] = useState<
    "left" | "none" | "right"
  >("none");

  const calculateVisibleItems = () => {
    const container = containerRef.current;

    if (container) {
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft; // Desplazamiento horizontal

      const item = container.children[0] as HTMLElement;
      let localVisibleItems = 0;
      if (item) {
        const itemWidth = item.offsetWidth;

        // Filtrar elementos que están completamente visibles
        const fullyVisibleItems: BlogInfo[] = [];
        blogCards.map((item, index) => {
          const itemLeftEdge = index * itemWidth - scrollLeft; // Posición izquierda del elemento teniendo en cuenta el scroll
          const itemRightEdge = itemLeftEdge + itemWidth; // Posición derecha del elemento

          let opacity = 0;

          if (itemRightEdge <= 0) {
            // Completamente a la izquierda
            opacity = 0;
          } else if (itemLeftEdge >= containerWidth) {
            // Completamente a la derecha
            opacity = 0;
          } else {
            // Parte visible
            const visibleLeftEdge = Math.max(itemLeftEdge, 0); // Punto donde empieza a ser visible
            const visibleRightEdge = Math.min(itemRightEdge, containerWidth); // Punto donde deja de ser visible

            const visibleWidth = visibleRightEdge - visibleLeftEdge; // Ancho visible del elemento
            opacity = Math.max(0, Math.min(1, visibleWidth / itemWidth)); // Ajustar a rango 0-1
          }
          if (opacity === 1) localVisibleItems++;

          fullyVisibleItems.push({
            opacity: opacity < 1 ? 0 : 1,
            ...item,
          });
        });

        setVisibleCount(localVisibleItems > 0 ? localVisibleItems : 1);
      }
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
        visibleIndex < blogCards.length - visibleCount
      ) {
        setVisibleIndex(visibleIndex + visibleCount);
      }
      setRefreshingAnimation("none");
    }, 400);
  };

  return (
    <StyledDynamicBentoGrid className={defaultSize ? "defaultSize" : ""}>
      <NextArrow
        inverted
        onClick={() => {
          handleScroll("left");
        }}
      />
      <StyledItemsContainer ref={containerRef}>
        {blogCards
          .slice(visibleIndex, visibleIndex + visibleCount)
          .map((item) => item.element)}
        <SlideCover
          isVisible={refreshingAnimation === "left"}
          position="top"
          haveOutAnimation
          animationDirection="toRight"
        />
        <SlideCover
          isVisible={refreshingAnimation === "right"}
          position="top"
          haveOutAnimation
          animationDirection="toLeft"
        />
      </StyledItemsContainer>
      <NextArrow
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

  &.defaultSize {
    &.vertical {
      width: var(--size-width-10-cols);
      height: 100vh;
    }
  }
`;

const StyledItemsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-auto-columns: var(--size-width-4-cols);
  grid-auto-flow: column;
  grid-template-rows: 100%;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  justify-content: space-evenly;
  position: relative;
`;
