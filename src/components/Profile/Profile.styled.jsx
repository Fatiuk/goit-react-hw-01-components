import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 280px;
  margin: 0 auto;
  padding-top: 32px;
  color: #464748;
  background-color: #fcfcfc;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const UserDescription = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 180px;
  display: block;
  margin: 0 auto;
  margin-bottom: 24px;
  border-radius: 50%;
`;

export const CenterText = styled.p`
  text-align: center;
  margin: 0;
`;

export const Username = styled(CenterText)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Tag = styled(CenterText)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #949799;
`;

export const Location = styled(CenterText)`
  font-size: 16px;
  font-weight: 500;
  color: #949799;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  background-color: #e1e7eb;
  border: 0.5px solid #00000035;

  &:first-child {
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-bottom-right-radius: 6px;
  }
`;

export const StatsText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #87898b;
`;

export const StatsValue = styled.span`
  font-weight: 500;
`;
