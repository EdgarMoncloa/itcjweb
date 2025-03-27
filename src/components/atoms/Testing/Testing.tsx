import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TestingProps extends ComponentPropsWithoutRef<"div"> {
  items: Array<{
    title: ReactNode;
    element: ReactNode;
  }>;
}
export const Testing = (props: TestingProps) => {
  return (
    <div>
      {props.items.map((item, idx) => {
        return (
          <div key={idx}>
            {item.title}
            {item.element}
          </div>
        );
      })}
    </div>
  );
};
