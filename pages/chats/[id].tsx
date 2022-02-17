import { NextPage } from 'next';
import Layout from '@components/layout';
import Message from '@components/message';

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="py-10 pb-16 px-4 space-y-4">
        <Message message="Hi how much are you selling the items?" />
        <Message message="I want $20,000" reversed />
        <Message message="미쳤어?" />

        <form className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 pr-12 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className=" flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full hover:bg-orange-600 cursor-pointer px-3 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
