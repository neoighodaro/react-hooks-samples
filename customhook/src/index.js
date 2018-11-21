import React from 'react';
import ReactDOM from 'react-dom';

import { useFriendStatus } from './FriendStatus';

import './styles.css';

function FriendListItem() {
  const [friends, { setFriendOnline, setFriendOffline }] = useFriendStatus({
    initialState: [
      { id: 1, name: 'Phoebe', online: false },
      { id: 2, name: 'Rachel', online: false },
      { id: 3, name: 'Ross', online: false }
    ]
  });

  return (
    <>
      {friends.map(friend => (
        <li style={{ color: friend.online ? 'green' : 'grey' }} key={friend.id}>
          {friend.name} &nbsp;
          <button onClick={() => setFriendOnline(friend.id)}>Set Online</button>
          <button onClick={() => setFriendOffline(friend.id)}>Set Offline</button>
        </li>
      ))}
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<FriendListItem />, rootElement);
