import { NextPage } from 'next';
import Item from '@components/item';
import Layout from '@components/layout';
import useSWR from 'swr';
import { ProductWithCount } from 'pages';
import { Product } from '@prisma/client';

const Loved: NextPage = () => {
  console.log(data);
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex flex-col space-y-5 pb-10 divide-y"></div>
    </Layout>
  );
};

export default Loved;
