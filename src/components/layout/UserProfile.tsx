import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-xs mx-auto mt-8 border border-neutral-200">
      <div className="flex flex-col items-center">
        <img
          src={user.picture}
          alt={user.name || 'User'}
          className="h-20 w-20 rounded-full object-cover border border-neutral-300 mb-4"
        />
        <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
        <p className="text-neutral-600 text-sm mb-2">{user.email}</p>
        {user.nickname && <p className="text-neutral-500 text-xs mb-2">@{user.nickname}</p>}
        <div className="text-neutral-400 text-xs mt-2">
          <div>User ID:</div>
          <div className="break-all">{user.sub}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
