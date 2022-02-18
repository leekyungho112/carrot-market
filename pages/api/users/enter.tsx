import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: '1234',
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: 'Anony',
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log('존재하는 유저입니다.');
    if (!user) {
      console.log('유저를 찾을수 없습니다.');
      user = await client.user.create({
        data: {
          name: 'Anony',
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log('존재하는 유저입니다.');
    if (!user) {
      console.log('유저를 찾을수 없습니다.');
      user = await client.user.create({
        data: {
          name: 'Anony',
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */

  return res.status(200).end();
}

export default withHandler('POST', handler);
