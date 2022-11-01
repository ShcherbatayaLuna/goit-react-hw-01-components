import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  background-color: white;
  width: 350px;
  height: 100%;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: gray;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const BoxItem = styled.div`
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
`;
