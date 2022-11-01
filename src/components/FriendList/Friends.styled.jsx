import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: 240px;
  display: flex;
  align-items: center;

  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 4px;
  margin-right: 10px;
  background-color: #d1dbd8;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
`;
