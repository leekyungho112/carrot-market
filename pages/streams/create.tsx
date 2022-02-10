import { NextPage } from 'next';
import Layout from '../../components/layout';

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 space-y-5 px-4">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id="name"
              type="email"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="price"
          >
            Price
          </label>
          <div className=" rounded-md flex items-center shadow-md relative">
            <div className="absolute left-0 pl-3 pointer-events-none flex items-center justify-center">
              <span className="text-gray-700 text-sm">$</span>
            </div>
            <input
              className=" appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              id="price"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute pointer-events-none right-0 pr-3 flex items-center">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            className="mt-1 shadow-sm w-full  focus:ring-orange-500  rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
          />
        </div>
        <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500">
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Create;
