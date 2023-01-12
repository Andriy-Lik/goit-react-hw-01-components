import styled from '@emotion/styled';

export const UserCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 220px;
height: 100%;
margin-top: 20px;
margin-bottom: 50px;
background-color: #b3ffff;
border-radius: 5px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
padding-top: 20px;
`;

export const Avatar = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid black;
background-color: #f2f2f2;

`;

export const Name = styled.p`
font-size: 24px;
color: black;
font-weight: bold;
padding-top: 10px;
`;
export const Tag = styled.p`
font-size: 18px;
color:  #808080;
padding-top: 10px;
`;
export const Location = styled.p`
font-size: 18px;
color:  #808080;
padding-top: 10px;
`;

export const Stats = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
padding-top: 10px;
padding-bottom: 10px;
background-color: #99ffff;
border-radius: 5px;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Label = styled.span`
font-size: 12px;
color:  #808080;
font-weight: bold;
padding-bottom: 5px;
`;
export const Quantity = styled.span`
font-size: 14px;
color:  black;
font-weight: bold;
`;
