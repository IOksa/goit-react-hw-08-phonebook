import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


export const RegisterForm = () => {
  const dispatch = useDispatch();

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
        <Button variant="contained" type="submit">Register</Button>
      </FormControl>

    </Box>




  );
};

