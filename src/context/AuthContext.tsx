import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
  name: string;
  phone?: string;
  address?: string;
  bio?: string;
  profilePicture?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    email: 'test@example.com',
    name: 'Test User',
    phone: '',
    address: '',
    bio: '',
  });

  const login = async (email: string, _password: string) => {
    try {
      // Example API call:
      // const response = await api.login(email, _password);
      // setUser(response.data.user);
      setUser({ email, name: email.split('@')[0] }); // Temporary example
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    // Implement your logout logic here
    setUser(null);
  };

  const signup = async (name: string, email: string, _password: string) => {
    try {
      // Example API call:
      // const response = await api.signup(name, email, _password);
      // setUser(response.data.user);
      setUser({ email, name }); // Temporary example
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      console.log('Updating profile with:', data);
      
      setUser(prev => {
        if (!prev) return null;
        const updatedUser = { ...prev, ...data };
        console.log('Updated user:', updatedUser);
        return updatedUser;
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return Promise.resolve();
    } catch (error) {
      console.error('Profile update error:', error);
      throw new Error('Failed to update profile');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated: !!user, 
        user, 
        login, 
        logout, 
        signup, 
        updateProfile 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 