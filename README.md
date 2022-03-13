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

### Form submit

- frontend에서 폼으로 제출하고나서 backend로 req.body를 찍어보면 정상적인 값이 들어와있는것을 볼수 있다. req.body.email로 찍어보게 되면 undefined가 나오게 된다. req.body가 req의 인코딩을 기준으로 인코딩 되기 떄문에 front에서 headers를 설정해줘야 된다.
  - ```js
    fetch('/api/users/enter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    ```

### withHandler

> Next.js에서 api router를 만들때에는 function을 export default 해야한다. return한 function이 nextjs가 실행할 함수가 된다 결국 nextjs가 실행 할 function을 return하는 function을 만드는것과 같다고 보면 된다.

### Log In 구현 사항

- Step1

  - [ ]phone이나 이메일로 로그인시 해당 유저가 이미 존재 하는지 없는지 판별
  - [ ]만약 없다면 회원가입 페이지로 리다이렉트 시키고 존재한다면 db에서 정보를 가져온다.

- 405 Error

  - 요청 method를 확인

- 로그인 인증이 안된 사용자를 router를 이용해 login 페이지로 redirect 시킬때
  - push : 히스토리에 남게 된다 뒤로가기를 눌렀을때에도 결국 이전에 접속할려던 페이지에 인증이 안되어 로그인페이지로 리다이렉트된다.
  - replace : 히스토리에 남지 않는다.
- 로그인한 유저의 정보를 프론트로 보내 정보를 가져올때 다른페이지에 갔다오면 처음 랜더링시 fetch 요청이 완료 전이라 undefined가 발생한다. 이를 해결하기 위해 캐싱 데이터를 활용할 수 있는데

  - 데이터 가져오기를 위한 React Hooks의 SWR을 활용한다.
  - swr은 HTTP 캐시 무효 전략으로 먼저 캐시로부터 데이터를 반환한 후 fetch요청을 하고, 최종적으로 최신화된 데이터를 가져온다.

- Step 2

  - product Model
  - Model을 생성 -> db 수정 -> mutation후에 데이터를 가져온다.
  - Favorite Products
    - 좋아요를 눌렀을 때 관심 목록에 데이터가 있어야 한다.
    - 좋아요 모델을 생성하고 user와 product의 관계를 설정해준다.
    - 로그인한 유저의 아이디와 상품 아이디를 검색 조건으로 이미 좋아요를 눌렀다면 데이터를 삭제 () 그렇지 않다면 생성해준다.
    - useSWR의 mutate bound함수를 사용 optimistic ui update로 백엔드 api 요청을 기다리지않고 유저에게 바로 좋아요 버튼을 표시해줄수 있다.
  - Post Model

    - model 생성 후 db수정 mutation 후 데이터를 가져온다.

  - Geo Location Bug

    - Next.js 는 페이지를 미리 만들어 두려고 한다. 서버사이드에서는 설정해준 useCoords의 useEffect가 실행 되지 않는다.
    - 초기 상태인 null을 가지게 된다 요점은 페이지가 처음 실행될때 초기 상태값으로 실행이 된다는점이다. 페이지가 초기 상태값으로 pre-generate 된다

  - model
    - 이미 db에 들어가 있는 테이블에 새로운 필드를 추가할 때 문제가 발생한다. 해결책으로는 3가지 정도가 존재하는데
    - 테이블을 삭제하고 다시 추가하는 방법과 원래 있던 테이블에 존재하는 데이터에는 추가해주지 않는 방법, 마지막으로는 기본값을 설정해주는 방법이있다.
