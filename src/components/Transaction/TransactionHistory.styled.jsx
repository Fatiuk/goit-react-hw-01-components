import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
  color: #464748d8;
  background-color: #fcfcfc;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TransactionHead = styled.thead``;

export const TransactionHeadRow = styled.tr``;

export const TransactionHeadHeader = styled.th`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fcfcfc;
  padding: 8px;
  background-color: #7fc3d9;
  border: 0.5px solid #00000035;
`;

export const TransactionBody = styled.tbody``;

export const TransactionBodyRow = styled.tr`
  &:nth-child(odd) {
    background-color: #fff;
  }
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionBodyHeader = styled.th`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 12px 4px;
  border: 0.3px solid #0000001c;
`;
