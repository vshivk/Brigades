import styled from "styled-components";
import {Card, Space} from "antd";

export const BrigadesListStyled = styled(Space)`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: unset;
`;
export const BrigadesCardStyled = styled(Card)`
  width: 250px;
  height: 280px;
`;
export const BrigadesCardInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;