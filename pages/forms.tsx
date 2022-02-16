import { useForm } from 'react-hook-form';

export default function Forms() {
  const { register, handleSubmit } = useForm();

  const onValid = () => {
    console.log('im valid bby');
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        {...(register('username'), { required: true })}
        placeholder="username"
      />
      <input
        {...(register('email'), { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...(register('password'), { required: true })}
        type="password"
        placeholder="Password"
      />

      <input type="submit" value="Create" />
    </form>
  );
}
