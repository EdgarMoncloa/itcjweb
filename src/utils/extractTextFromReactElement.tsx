import React from "react";

export const extractTextFromReactElement = (
  element: React.ReactNode
): string => {
  if (typeof element === "string") {
    return element;
  }

  if (React.isValidElement(element)) {
    return (
      React.Children.map(element.props.children, extractTextFromReactElement)
        ?.filter(Boolean)
        .join("") || ""
    );
  }

  return "";
};
