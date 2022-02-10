import { NextPage } from 'next';
import Layout from '../../components/layout';

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10  px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-800 font-semibold text-2xl mt-2">
          Let&apos;s try potato
        </h3>
        <div className="py-10 pb-16 h-[50vh] overflow-y-auto px-4 space-y-4">
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling the items?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="h-8 w-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
              <p>I want $20,000</p>
            </div>
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
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
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
