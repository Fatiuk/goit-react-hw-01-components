import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status $IsOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
