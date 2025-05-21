import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/layout/UserProfile';

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <UserProfile />
      <p className="mb-4 mt-6 text-xs text-neutral-400">Viewing profile for user ID: {id}</p>
    </div>
  );
};

export default ProfilePage;