import React from 'react';
import { LogIn } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from './AuthContext';

const LoginButton: React.FC = () => {
  const { login } = useAuth();

  return (
    <Button 
      onClick={login}
      variant="secondary"
      className="flex items-center gap-2"
    >
      <LogIn size={18} />
      <span>Log In</span>
    </Button>
  );
};

export default LoginButton;