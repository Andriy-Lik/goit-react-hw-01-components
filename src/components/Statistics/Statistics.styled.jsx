import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
width: 220px;
height: 100%;
margin-bottom: 50px;
border-radius: 3px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;

`;

export const StatTitle = styled.h2`
font-size: 15px;
font-weight: 500;
color: grey;
text-align: center;
text-transform: uppercase;
padding-top: 15px;
padding-bottom: 15px;
`;

export const StatList = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
border-radius: 3px;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
width: 44px;
color: white;
align-items: center;
background-color: ${p => p.backgroundColor};
padding: 5px;
`;

export const Label = styled.span`
font-size: 10px;
margin-bottom: 10px;
`;

export const Percentage = styled.span``;