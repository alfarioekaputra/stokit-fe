import { DataTable } from '@/components/datatable/datatable';
import { useQuery } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';

type Props = {
  filters: { name: string };
  page: number;
  setPage: (p: number) => void;
};

const fetchCategories = async ({ filters, page }: Props) => {
  const user = localStorage.getItem('tanstack.auth.user');

  const myHeaders = new Headers();
  myHeaders.append('Authorization', user!);

  const params = new URLSearchParams({
    name: filters.name,
    page: page.toString(),
    size: '10',
  });

  const res = await fetch(`/api/category?${params.toString()}`, {
    method: 'GET',
    headers: myHeaders,
  });

  if (!res.ok) throw new Error('gagal menampilkan data');

  return await res.json();
};

export default function CategoryPage({
  filters,
  page,
  setPage,
}: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ['categories', filters, page],
    queryFn: () => fetchCategories({ filters, page, setPage }),
  });

  const columns: ColumnDef<Category>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableColumnFilter: true,
    },
    {
      accessorKey: 'parent',
      header: 'Parent',
      enableColumnFilter: true,
    },
  ];

  if (isLoading) return <p>Loading categories...</p>;

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.items ?? []}
        page={page}
        setPage={setPage}
        total={data?.total ?? 0}
        isLoading={isLoading}
      />
    </>
  );
}
