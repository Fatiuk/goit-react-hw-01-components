import styled from 'styled-components';

export const StatSection = styled.section`
  width: 320px;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 24px;
  background-color: #fcfcfc;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StatTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #949799;
`;

export const StatList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #fcfcfc;
  text-shadow: 2px 2px 4px #000;

  &:first-child {
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-bottom-right-radius: 6px;
  }
`;

export const StatLabel = styled.span`
  font-size: 12px;
  margin-bottom: 6px;
`;

export const StatPercentage = styled.span`
  font-size: 18px;
`;
