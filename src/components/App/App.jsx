import Profile from '../Profile/Profile';
import user from '../../dataset/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../../dataset/data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../dataset/friends.json';
import TransactionHistory from '../Transactions/TransactionHistory';
import transactions from '../../dataset/transactions.json';
import Container from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
