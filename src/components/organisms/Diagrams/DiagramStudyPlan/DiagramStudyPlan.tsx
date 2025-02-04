import styled, { css } from "styled-components";
import { StyledH3, StyledH6 } from "../../../../tokens/CustomText";
import { ReactNode } from "react";
import { SingleInfoCard } from "../../../molecules/InfoCard";

interface Subject {
  name: string;
  row?: number;
}

interface Column {
  title?: string;
  subjects: Subject[];
}

export interface DiagramStudyPlanProps {
  title?: string;
  columns: Column[];
}

export const DiagramStudyPlan = ({ title, columns }: DiagramStudyPlanProps) => {
  const numCols = columns.length;
  let haveTitles = false;
  let baseNumRows = 0;
  columns.forEach((column) => {
    let numRows = column.subjects.length;
    if (column.title) {
      haveTitles = true;
      numRows += 1;
    }
    if (numRows > baseNumRows) {
      baseNumRows = numRows;
    }

    column.subjects.forEach((subject) => {
      if (subject.row && subject.row > baseNumRows) {
        baseNumRows = subject.row;
      }
    });
  });

  const items = [];
  for (let columnIdx = 1; columnIdx <= numCols; columnIdx++) {
    const column = columns[columnIdx - 1];
    const columnItems = [];
    const usedRows = new Set<number>();

    if (haveTitles) {
      usedRows.add(1);
      if (column.title) {
        columnItems.push(
          <StyledColTitle $col={columnIdx} $row={1}>
            {column.title}
          </StyledColTitle>
        );
      } else {
        columnItems.push(
          <StyledColTitle $col={columnIdx} $row={1}></StyledColTitle>
        );
      }
    }

    // Render the subjects
    for (let subjectIdx = 1; subjectIdx <= baseNumRows; subjectIdx++) {
      const subject = column.subjects[subjectIdx];
      let row = subjectIdx;

      if (subject) {
        if (subject.row) row = subject.row;
        if (haveTitles) row += 1;
        usedRows.add(row);
        columnItems.push(
          <StyledSubject $col={columnIdx} $row={row}>
            {subject.name}
          </StyledSubject>
        );
      }
    }

    // Fill the rest of the rows with blanks
    for (let row = 1; row <= baseNumRows + (haveTitles ? 1 : 0); row++) {
      if (usedRows.has(row)) continue;
      columnItems.push(
        <StyledSubject
          $col={columnIdx}
          $row={row}
          variant="blank"
        ></StyledSubject>
      );
    }
    items.push(columnItems);
  }

  return (
    <StyledDiagramStudyPlan>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStudyPlanContainer
        $columns={numCols}
        $rows={(haveTitles ? 1 : 0) + baseNumRows}
        $haveTitles={haveTitles}
      >
        {items}
      </StyledStudyPlanContainer>
    </StyledDiagramStudyPlan>
  );
};

const StyledTitle = styled(StyledH3)`
  text-align: center;
`;

const StyledDiagramStudyPlan = styled.div`
  width: 100%;
  max-height: var(--size-height-16-rows);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: var(--size-gap-medium);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  border-radius: var(--size-border-radius-medium);
  padding: var(--size-padding-xs);
`;

type StudyPlanContainerProps = {
  $columns: number;
  $rows: number;
  $haveTitles: boolean;
};
const StyledStudyPlanContainer = styled.div<StudyPlanContainerProps>`
  display: grid;
  gap: var(--size-gap-small);
  height: 100%;
  overflow: auto;
  padding: var(--size-padding-medium);
  width: 100%;

  grid-template-columns: repeat(
    ${(props) => props.$columns},
    var(--size-width-2-cols)
  );
  grid-template-rows:
    ${(props) => props.$haveTitles && "var(--size-height-1-rows)"}
    repeat(${(props) => props.$rows}, var(--size-height-2-rows));
`;

const cssInfoCard = css<{ $col: number; $row: number }>`
  grid-column: ${(props) => props.$col};
  grid-row: ${(props) => props.$row};
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: var(--size-padding-small);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StyledColTitle = styled(StyledH6)<{ $col: number; $row: number }>`
  ${cssInfoCard}
`;

const StyledSubject = styled(SingleInfoCard)<{ $col: number; $row: number }>`
  ${cssInfoCard}
`;
