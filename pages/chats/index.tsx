import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/layout';

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 divide-y-[1px] divide-orange-300">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/chats/${i}`}>
            <a className="flex  px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <p className="text-gray-700">Steve Jobs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
