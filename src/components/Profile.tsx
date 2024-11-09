import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
  });

  const [_selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update formData when user data changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        bio: user.bio || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log('Submitting form data:', formData);
      await updateProfile(formData);
      
      // Force a re-render by updating state
      setFormData(prev => ({ ...prev }));
      
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      
      // Debug log
      console.log('Updated user data:', user);
      
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Update error:', err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      handleProfilePictureUpdate(e.target.files[0]);
    }
  };

  const handleProfilePictureUpdate = async (file: File) => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const imageUrl = URL.createObjectURL(file);
      
      await updateProfile({ 
        ...formData,
        profilePicture: imageUrl
      });
      setSuccess('Profile picture updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update profile picture. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {user?.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      user?.name?.charAt(0).toUpperCase()
                    )}
                  </div>
                  {isEditing && (
                    <>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="image/*"
                        className="hidden"
                      />
                      <button 
                        onClick={handleCameraClick}
                        className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === 'profile' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === 'security' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Security Settings
                </button>
                <button
                  onClick={() => setActiveTab('preferences')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === 'preferences' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Preferences
                </button>
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
                    Profile Settings
                  </h1>
                  <p className="text-gray-500 mt-1">Manage your account information and preferences</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isEditing
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                  }`}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 text-red-500 text-sm p-4 rounded-lg flex items-center animate-fade-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-6 bg-green-50 text-green-500 text-sm p-4 rounded-lg flex items-center animate-fade-in font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                        isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                      } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={true}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-transparent bg-gray-50 placeholder-gray-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                        isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                      } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                        isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                      } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                      isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-200 hover:scale-[1.02]"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </span>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 