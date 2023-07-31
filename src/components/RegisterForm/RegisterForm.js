import { useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { register } from 'redux/auth/operations';
import { clearError } from 'redux/auth/slice';
import css from './RegisterForm.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useAuth } from 'hooks';
import { RotatingLinesSpinner } from 'components/Spinner/RotatingLinesSpinner';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {isLoading, error} = useAuth();

  useEffect(() => {
    if (error) {
      toast.error('Wrong user, login or password! Please, try again');
      dispatch(clearError());
    }
  },[error, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '35ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
  >
      <FormControl>
        <TextField label="Username" type="text" name="name" variant="outlined" size="Normal" margin="normal"/>
        <TextField label="Email" type="email" name="email" variant="outlined" size="Normal" margin="normal"/>
        <TextField label="Password"  type="password" name="password" variant="outlined" size="Normal" margin="normal"/>
        <Button variant="contained" type="submit" disabled={isLoading} className={css.Button}>        
        {isLoading ? <RotatingLinesSpinner/> : 'Register'}</Button>
      </FormControl>

    </Box>




  );
};


