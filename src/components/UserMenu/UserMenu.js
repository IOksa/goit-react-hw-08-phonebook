import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{user.email}</p>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
};

