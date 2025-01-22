import styled from "styled-components";
import { StyledH3 } from "../../../../tokens/CustomText";
import { ReactNode } from "react";
import { SingleInfoCard } from "../../../molecules/InfoCard";

interface Subject {
  name: string;
  row?: number;
}

interface Column {
  title: string;
  subjects: Subject[];
}

export interface DiagramStudyPlanProps {
  title: string;
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
          <StyledSubject $col={columnIdx} $row={1}>
            {column.title}
          </StyledSubject>
        );
      } else {
        columnItems.push(
          <StyledSubject $col={columnIdx} $row={1}>
            Title Blank
          </StyledSubject>
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
        <StyledSubject $col={columnIdx} $row={row}>
          Blank
        </StyledSubject>
      );
    }
    items.push(columnItems);
  }

  return (
    <StyledDiagramStudyPlan>
      <StyledH3>{title}</StyledH3>
      <StyledStudyPlanContainer
        $columns={numCols}
        $rows={(haveTitles ? 1 : 0) + baseNumRows}
      >
        {items}
      </StyledStudyPlanContainer>
    </StyledDiagramStudyPlan>
  );
};

const StyledDiagramStudyPlan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

type StudyPlanContainerProps = {
  $columns: number;
  $rows: number;
};
const StyledStudyPlanContainer = styled.div<StudyPlanContainerProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$columns},
    var(--size-width-2-cols)
  );
  grid-template-rows: repeat(
    ${(props) => props.$rows},
    var(--size-height-2-row)
  );
  gap: var(--size-gap-small);
`;

const StyledSubject = styled(SingleInfoCard)<{ $col: number; $row: number }>`
  grid-column: ${(props) => props.$col};
  grid-row: ${(props) => props.$row};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
