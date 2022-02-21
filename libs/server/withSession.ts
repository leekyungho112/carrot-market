import { withIronSessionApiRoute } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'carrotsession',
  password: process.env.COOKIE_PASSWORD!,
};

// api 라우터에서 sesssion을 받아오기 위한 function
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}

// Next에서 server side rendering에서 session을 받아올 function
