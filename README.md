# Carrot Market

> Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

- settings

  - react18 RC version
  - typescript
  - tailwindCss setup

- tailwindCSS Modifier

```html
<div
  className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500"
>
  Checkout
</div>
```

- tailwindCSS Responsive Modifier
  - sm
  - md
  - lg
  - xl
- tailwindCSS dark mode
  - tailwind.config.js 파일에서 darkMode : "media" (default 컴퓨터의 모드에 따라 브라우저의 다크모드가 설정) "class" 토글버튼을 만들어 수동으로 제어가 가능하다.
- tailwindCSS

  - 규칙에서 벗어난 설정들을 할경우 text-[200px] text-[#000]

- 조건식에서 적용해야 할경우 classname을 받는 함수를 만들어 사용한다.

- Refactoring
  - [x] 두번 혹은 반복적인 사용의 컴포넌트를 분리해서 처리

---

### DATABASE Setup

- Prisma : Node.js와 JS or TS의 ORM(Object Relational Mapping)
  - SQL같은 쿼리코드를 작성하지 않고 JS나 TS로 코드를 작성한다.
- PlanetScale
  - MySQL 호환 serverless 데이터베이스 플랫폼

> Recap

- schema.prisma 파일은 프리스마 설정과 데이터의 모델을 정의한다.
- prisma studio를 통해 관리자 패널을 제공한다.
- Next.js는 자체적으로 api라우터를 만들수 있다.

---

### React Hook Forms

- 기존의 많은 텍스트 필드가 존재할경우

  - 텍스트 필드의 state 의 증가와 validation처리를 위한 state또한 늘어나게 될것이다.

  ```js
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState('');
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUserName(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === '' || email === '' || password === '') {
      setFormErrors('All fields are required');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={username}
        onChange={onUsernameChange}
        placeholder="username"
        required
      />
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        required
      />
      {formErrors}
      <input type="submit" value="Create" />
    </form>
  );
  ```

- React Hook Form
  - useForm의 객체안에 내장메소드인 register를 활용하여 input에 value와 onChange, onBlur등을 대체하게 된다
    > const { register, watch } = useForm();  
    > <input {...register('email')} type="email" placeholder="Email" required />
  - watch함수를 통해 form에 register함수에 입력한 이름을 key로 가지는 객체가 된다.
    > ex){email : "dsjfksdf@fhjsd.com"}
  - Validation
    > const { register, handleSubmit,formState: { errors },} = useForm<LoginForm>({ mode: onChange' })
    - formState안에 errors를 통해 validation을 핸들링이 가능하다 message를 보여준다거나...
    - form을 제출했을때 errors 핸들링이 되는데 이때 useForm의 기본 모드가 onSubmit으로 되어있기 때문이다. mode를 변경하여 인풋값에 변화가 있을때나 다른 필드를 클릭했을때 바로 erros핸들링이 가능하다.
