const filterPills = ['All', 'Pastries', 'Breads', 'Coffee'];

interface SearchFiltersProps {
  search: string;
  activeFilter: string;
  onSearch: (value: string) => void;
  onFilter: (filter: string) => void;
}

function SearchFilters({ search, activeFilter, onSearch, onFilter }: SearchFiltersProps) {
  return (
    <div className="flex gap-3.5 flex-wrap items-center mb-7.5">
      <div className="relative flex-1 min-w-60">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-subtle-ink">
          ⌕
        </span>
        <input
          value={search}
          onInput={(e) => onSearch((e.target as HTMLInputElement).value)}
          placeholder="Search pastries, breads, coffee..."
          className="w-full border-border bg-card rounded-4xl py-3.25 pr-4.5 pl-9.5 text-sm text-plum-ink"
        />
      </div>
      <div className="flex gap-2.25 flex-wrap">
        {filterPills.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => onFilter(filter)}
            className={`border-[1.5px] rounded-4xl py-2.75 px-5 text-[13px] font-semibold cursor-pointer hover:scale-105 duration-300 ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchFilters;
