import styled from '@emotion/styled';

export const TableCard = styled.table`
width: 400px;
border-collapse: collapse;
margin-bottom: 20px;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
background-color: #e0ebeb;
&:nth-of-type(2n-1) {
    background-color: white;
}
text-align: center;
`;

export const TableName = styled.th`
padding: 7px;
background-color: #a2c3c3;
color: white;
font-size: 10px;
text-transform: uppercase;
font-weight: 500;
border: 1px solid #808080;
`;

export const TableInfo = styled.td`
padding: 7px;
color: grey;
text-transform: capitalize;
font-size: 10px;
border: 1px solid #808080;
`;