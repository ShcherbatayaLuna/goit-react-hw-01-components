import styled from 'styled-components';

export const Item = styled.li`
  width: 70px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: ${() => getRandomHexColor()}; ;
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

function getRandomHexColor() {
  return ` #${Math.floor(Math.random() * 16777215).toString(16)}`;
}
