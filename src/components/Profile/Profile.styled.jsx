import styled from 'styled-components';

export const Card = styled.div`
  width: 240px;
  height: 100%;

  padding-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageAvatar = styled.img`
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.5;

  margin: 0;
  margin-bottom: 10px;
`;
export const Info = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 1;

  color: gray;
  margin: 0;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  background-color: #bbe7fa;
  border-top: 1px solid gray;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 1;

  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
  text-align: center;
`;
