import { BlogCard, BlogCardProps } from '../../molecules/BlogCard';
import { useEffect, useRef, useState } from 'react';
import { SlideCover } from '../../atoms/SlideCover';
import { NextArrow } from '../../atoms/NextArrow';
import styled from 'styled-components';

// TODO EN EL PRIMER RENDER NO SE ESTA RENDERIZANDO PORQUE EL TAMANO ES 0

interface BlogsSectionProps {
  blogCards: BlogCardProps[];
}

interface BlogInfo extends BlogCardProps {
  opacity?: number;
}

export const BlogsSection = ({ blogCards }: BlogsSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [visibleCount, setVisibleCount] = useState<number>(blogCards.length);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [refreshingAnimation, setRefreshingAnimation] = useState<
    'left' | 'none' | 'right'
  >('none');

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
            ...item,
            opacity: opacity < 1 ? 0 : 1,
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
      container.addEventListener('scroll', calculateVisibleItems);
      window.addEventListener('resize', calculateVisibleItems);

      calculateVisibleItems(); // Calcular al montar

      return () => {
        container.removeEventListener('scroll', calculateVisibleItems);
        window.removeEventListener('resize', calculateVisibleItems);
      };
    }
  }, []);

  const handleScroll = (side: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    setRefreshingAnimation(side);

    setTimeout(() => {
      if (side === 'left' && visibleIndex > 0) {
        setVisibleIndex(visibleIndex - visibleCount);
      } else if (
        side === 'right' &&
        visibleIndex < blogCards.length - visibleCount
      ) {
        setVisibleIndex(visibleIndex + visibleCount);
      }
      setRefreshingAnimation('none');
    }, 400);
  };

  return (
    <StyledBlogsSection>
      <NextArrow
        inverted
        onClick={() => {
          handleScroll('left');
        }}
      />
      <StyledBlogCardsContainer ref={containerRef}>
        {blogCards
          .slice(visibleIndex, visibleIndex + visibleCount)
          .map((item, index) => (
            <StyledBlogCardWrapper key={index}>
              <BlogCard
                title={item.title}
                imgSrc={item.imgSrc}
                content={item.content}
              />
            </StyledBlogCardWrapper>
          ))}
        <SlideCover
          isVisible={refreshingAnimation === 'left'}
          position='top'
          haveOutAnimation
          animationDirection='toRight'
        />
        <SlideCover
          isVisible={refreshingAnimation === 'right'}
          position='top'
          haveOutAnimation
          animationDirection='toLeft'
        />
      </StyledBlogCardsContainer>
      <NextArrow
        onClick={() => {
          handleScroll('right');
        }}
      />
    </StyledBlogsSection>
  );
};

const StyledBlogsSection = styled.div`
  display: grid;
  grid-template-columns: var(--size-width-1-cols) 14fr var(--size-width-1-cols);
  width: calc(100%);
  overflow: hidden;
  height: var(--size-height-10-row);
  gap: var(--size-gap-small);
`;

const StyledBlogCardsContainer = styled.div`
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

const StyledBlogCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;

  & > * {
    margin: auto;
    height: 100%;
    width: 90%;
  }
`;
