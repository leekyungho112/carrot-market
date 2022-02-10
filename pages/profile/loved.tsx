import { NextPage } from 'next';
import Item from '../../components/item';
import Layout from '../../components/layout';

const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={0}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
