import { useState } from 'react';

export function useFriendStatus({ initialState }) {
  const [friends, setFriends] = useState(initialState);

  const setOnlineStatus = (id, friend, online) => {
    if (friend.id === id) friend.online = !!online;
    return friend;
  };

  const setFriendOnline = id => {
    setFriends(friends.map(friend => setOnlineStatus(id, friend, true)));
  };

  const setFriendOffline = id => {
    setFriends(friends.map(friend => setOnlineStatus(id, friend, false)));
  };

  return [friends, { setFriendOnline, setFriendOffline }];
}
