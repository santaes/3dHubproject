import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/layout/UserProfile';

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">User Profile</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <UserProfile />
      </div>
      <p className="mb-4 mt-6 text-xs text-neutral-400 text-center">Viewing profile for user ID: {id}</p>
    </div>
  );
};

export default ProfilePage;