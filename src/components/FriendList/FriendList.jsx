import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendCard } from './FriendList.styled'

function FriendList({ friends }) {
    return (
        <FriendCard>
            {friends.map((friend) => (
                <FriendListItem 
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </FriendCard>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};

export default FriendList;