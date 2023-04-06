import styled from "styled-components";
import {Space} from "antd";

export const FilterListStyled = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FilterItemStyled = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;