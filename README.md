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
