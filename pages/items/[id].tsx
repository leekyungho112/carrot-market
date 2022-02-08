import { NextPage } from 'next';

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-400" />
        <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
            <p className="text-xs font-semibold text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">iPhone 20</h1>
          <span className="text-3xl block mt-3 text-gray-900">$150</span>
          <p className="text-base my-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit voluptatum, obcaecati distinctio quisquam eveniet
            tempora amet, reiciendis, eum quam laudantium voluptas quia non
            iste. Eum iure illum nam at similique!
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
              대화하기
            </button>
            <button className="p-3 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">비슷한 상품</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-slate-400" />
              <h3 className="text-gray-700 -mb-1">iPhone 18</h3>
              <span className="text-sm font-medium text-gray-900">$100</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
