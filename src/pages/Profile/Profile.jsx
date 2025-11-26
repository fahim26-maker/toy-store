import React from 'react';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';


const Profile = () => {
    const auth = getAuth();
  const user = auth.currentUser;

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        alert('Profile updated!');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  }
};


    return (
        <div className='py-10 bg-[#FFF0E1]'>
             <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {user && (
        <div className="mb-6">
          <img src={user.photoURL} alt="User" className="w-24 h-24 rounded-full mb-2" />
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter new name"
          />
        </div>
        <div>
          <label className="block font-medium">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter new photo URL"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </form>
    </div>

        </div>
    );
};

export default Profile;