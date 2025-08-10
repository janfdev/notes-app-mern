import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  onClearSearch: () => void;
};

const SearchBar = ({
  value,
  onChange,
  handleKeyDown,
  handleSearch,
  onClearSearch,
}: SearchBarProps) => {
  return (
    <div className="md:w-80 w-60 flex items-center px-4 bg-primary/80 dark:bg-primary/10 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none text-white dark:text-accent-foreground"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      {value && (
        <IoMdClose
          onClick={onClearSearch}
          className="text-xl text-white cursor-pointer hover:text-accent mr-3 "
        />
      )}
      <FaMagnifyingGlass
        className="text-white cursor-pointer hover:text-primary "
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
