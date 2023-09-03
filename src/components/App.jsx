// ============ Profile (Task 01) ============
import Profile from './Profile';
import user from './Profile/user.json';

// ============ Statistics (Task 02) ============
import data from './Statistics/data.json';
import Statistics from './Statistics';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};

export default App;
