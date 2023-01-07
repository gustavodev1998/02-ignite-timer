import styled from "styled-components";

interface DefaultLayoutProps {
  maxSize: number;
}

export const LayoutContainer = styled.div<DefaultLayoutProps>`
  max-width: 74rem;

  height: ${(props) => (props.maxSize <= 9 ? "calc(100vh - 10rem)" : "auto")};
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
