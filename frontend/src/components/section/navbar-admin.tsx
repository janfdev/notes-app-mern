import { useNavigate } from "react-router";
import { useState } from "react";
import ProfileInfo from "../cards/ProfileInfo";
import SearchBar from "../search/SearchBar";
import { UserInfo } from "@/utils/types/types";
import { Logo } from "../navbar/logo";

type NavbarProps = {
  userInfo: UserInfo | null;
  onSearchNote: (query: string) => void;
  handleClearSearch: () => void;
};

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };
  return (
    <nav className="bg-white flex items-center justify-between px-6 py-2 drop-shadow top-0 sticky z-30">
      <span className="flex items-center gap-4">
        <Logo />
        <h2 className="text-xl font-medium md:block hidden text-black py-2">
          Nts
          <span className="bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
            Free
          </span>
        </h2>
      </span>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      {userInfo ? (
        <ProfileInfo userInfo={userInfo} onLogout={handleLogout} />
      ) : (
        <div className="flex items-center gap-x-3"></div>
      )}{" "}
    </nav>
  );
};

export default Navbar;
