import PropTypes from 'prop-types';
import { 
    FriendCard, 
    FriendStatus,
    FriendAvatar,
    FriendName 
} from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <FriendCard>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendCard>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;