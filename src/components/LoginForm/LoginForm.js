import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
      <FormControl >
        <TextField label="Email" type="email" name="email" variant="outlined" size="Normal" margin="normal"/>
        <TextField label="Password"  type="password" name="password" variant="outlined" size="Normal" margin="normal"/>
        <Button variant="contained" type="submit">Log In</Button>
      </FormControl>

    </Box>



  
  );
};


