import { Product } from '@prisma/client';
import useSWR from 'swr';
import Item from './item';

interface ProductListProps {
  kind: 'favs' | 'sales' | 'purchases';
}

interface Record {
  id: number;
  product: Product;
}

interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(
    `/api/users/me/record?kind=${kind}`
  );
  return data ? (
    <>
      {data[kind]?.map((record) => (
        <Item
          id={record.product.id}
          key={record.id}
          title={record.product.name}
          price={record.product.price}
          hearts={record.product.favCount}
          comments={1}
        />
      ))}
    </>
  ) : null;
}
