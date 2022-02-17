import { NextPage } from 'next';
import Item from '@components/item';
import Layout from '@components/layout';

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={4}
            hearts={2}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
