import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Customers' };

export default async function Customers({
  searchParams
}: {searchParams?: {query?: string, page?: string}}) {
  const query = searchParams?.query ?? '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <Table customers={customers} />
    </main>
  );
}
