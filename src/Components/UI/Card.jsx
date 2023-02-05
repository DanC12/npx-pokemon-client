import styled from "styled-components";

const Card = styled.div`
  margin-top: ${(props) => props["margin-top"]};
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
`;

export default Card;
