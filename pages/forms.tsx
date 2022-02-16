import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {
    console.log('im valid bby');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        type="text"
        {...register('username', {
          required: 'username is required',
          minLength: { message: 'logger than 5 chars', value: 5 },
        })}
        placeholder="username"
      />
      <input
        {...register('email', { required: 'email is required' })}
        type="email"
        placeholder="Email"
      />

      <input
        {...register('password', { required: 'password is required' })}
        type="password"
        placeholder="Password"
      />

      <input type="submit" value="Create" />
    </form>
  );
}
