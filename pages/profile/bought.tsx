import { NextPage } from 'next';
import Item from '@components/item';
import Layout from '@components/layout';
import useSWR from 'swr';
import { Product, Record } from '@prisma/client';

interface ProductWithCount extends Product {
  record: Record[];
}
interface ProductsResponse {
  ok: boolean;
  purchases: Record[];
}

const Bought: NextPage = () => {
  const { data } = useSWR<ProductsResponse>(`/api/users/me/record?kind=bought`);
  console.log(data);
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        {data?.purchases.map((item, i) => (
          <Item
            id={item.id}
            key={i}
            title={'fdsf'}
            price={12}
            comments={1}
            hearts={3}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
