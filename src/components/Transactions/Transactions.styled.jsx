import styled from 'styled-components';

export const TranHistory = styled.table`
  width: 680px;
  border-collapse: collapse;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TitleBox = styled.tr`
  background-color: #6dd6ff;
`;

export const Title = styled.th`
  padding: 10px;
  border: 1px solid #d1dbd8;

  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  color: white;
`;

export const DescrBox = styled.tr`
  :hover {
    background-color: #b5edff;
    cursor: pointer;
  }
`;

export const Description = styled.td`
  padding: 10px;
  border: 1px solid #d1dbd8;

  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  text-transform: capitalize;

  color: gray;
`;
