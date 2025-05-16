type Props = {
  filters: { name: string };
  setFilters: (f: { name: string }) => void;
};

export default function CategoryFilters({
  filters,
  setFilters,
}: Props) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        className="border p-2 rounded"
        placeholder="Search name..."
        value={filters.name}
        onChange={(e) =>
          setFilters({ ...filters, name: e.target.value })
        }
      />
      {/* 
      <select
        className="border p-2 rounded"
        value={filters.role}
        onChange={(e) =>
          setFilters({ ...filters, role: e.target.value })
        }
      >
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select> */}
    </div>
  );
}
