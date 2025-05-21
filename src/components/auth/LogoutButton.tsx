import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from './AuthContext';
import ConfirmDialog from '../ui/ConfirmDialog';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => setOpen(true);
  const handleConfirm = () => {
    setOpen(false);
    logout();
  };
  const handleCancel = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleLogout}
        variant="ghost"
        className="flex items-center gap-2"
      >
        <LogOut size={18} />
        <span>Log Out</span>
      </Button>
      <ConfirmDialog
        open={open}
        title="Confirm Logout"
        description="Are you sure you want to log out?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default LogoutButton;