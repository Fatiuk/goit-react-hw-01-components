import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0;
  list-style: none;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #fcfcfc;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${({ $IsOnline }) => ($IsOnline ? '#44914f;' : '#e14e4e')};
`;

export const Avatar = styled.img`
  margin-right: 18px;
  padding: 6px;
  background-color: #9497992e;
  border-radius: 6px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #464748;
`;
