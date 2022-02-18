import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anony',
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGEID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  }
  return res.json({
    ok: true,
  });
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
}

export default withHandler('POST', handler);
