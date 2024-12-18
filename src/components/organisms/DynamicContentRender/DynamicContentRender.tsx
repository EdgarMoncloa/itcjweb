export interface DynamicContentRenderProps {
  content: string;
}

export const DynamicContentRender = ({
  content,
}: DynamicContentRenderProps) => {
  return <div>{content}</div>;
};
