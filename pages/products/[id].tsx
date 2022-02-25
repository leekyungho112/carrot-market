import { NextPage } from 'next';
import Button from '@components/button';
import Layout from '@components/layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import { Product, User } from '@prisma/client';

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  return (
    <Layout canGoBack>
      {!data ? (
        'Loading...'
      ) : (
        <div className="px-4 py-10">
          <div className="mb-8">
            <div className="h-96 bg-slate-400" />
            <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {data?.product.user.name}
                </p>
                <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                  <a className="text-xs font-semibold text-gray-500">
                    View profile &rarr;
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-bold text-gray-900">
                {data?.product.name}
              </h1>
              <span className="text-3xl block mt-3 text-gray-900">
                ${data?.product.price}
              </span>
              <p className="text-base my-6 text-gray-700">
                {data?.product.description}
              </p>
              <div className="flex items-center justify-between space-x-2">
                <Button large text="판매자와 대화하기">
                  대화하기
                </Button>
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
              {data?.relatedProducts?.map((similar) => (
                <Link href={`/products/${similar.id}`} key={similar.id}>
                  <a>
                    <div className="h-56 w-full mb-4 bg-slate-400" />
                    <h3 className="text-gray-700 -mb-1">{similar?.name}</h3>
                    <span className="text-sm font-medium text-gray-900">
                      ${similar?.price}
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ItemDetail;
