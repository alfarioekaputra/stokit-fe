import CategoryFilters from '@/components/category/CategoryFilters';
import CategoryPage from '@/components/category/CategoryPage';
import { useDebounce } from '@/components/debounce';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/app/category/')({
  component: CategoryComponent,
});

function CategoryComponent() {
  const [filters, setFilters] = useState({ name: '' });
  const [page, setPage] = useState(0);

  const debouncedFilters = {
    name: useDebounce(filters.name, 500),
  };

  return (
    <>
      <div className="p-4">
        <CategoryFilters filters={filters} setFilters={setFilters} />
        <CategoryPage
          filters={debouncedFilters}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}
