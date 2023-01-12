import styled from '@emotion/styled';

export const FriendCard = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
width: 220px;
padding: 10px;
margin-bottom: 10px;
border: 2px solid #808080;
border-radius: 3px;

&:last-child {
    margin-bottom: 0;
}
`;


export const FriendStatus = styled.span`
background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
}};
width: 15px;
height: 15px;
margin-right: 10px;
border: 1px solid #808080;
border-radius: 50%;
`;

export const FriendAvatar = styled.img`

margin-right: 10px;
border: 2px solid #808080;
border-radius: 5px;
`;

export const FriendName = styled.p`
color: #808080;
font-size: 20px;
`;