import PropTypes from 'prop-types';
import {
  Card,
  Description,
  ImageAvatar,
  Name,
  Info,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <ImageAvatar
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="100"
        />
        <Name>{userName}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
