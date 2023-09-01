import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsText,
  StatsValue,
} from './Profile.styled';

const Profile = ({
  username = 'Unknown User',
  tag = 'none',
  location = 'Not Available',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
  followers,
  views,
  likes,
}) => {
  return (
    <UserProfile>
      <UserDescription>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserDescription>

      <Stats>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsValue>{followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsValue>{views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsValue>{likes}</StatsValue>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
