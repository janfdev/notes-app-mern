import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./search/SearchBar";
import { UserInfo } from "../utils/types/types";
import { Logo } from "./navbar/logo";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

type NavbarProps = {
  userInfo: UserInfo | null;
  onSearchNote: (query: string) => void;
  handleClearSearch: () => void;
};

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };
  return (
    <nav className="flex items-center justify-between border border-b px-6 py-2 drop-shadow top-0 sticky z-30">
      <span className="flex items-center gap-4">
        <Logo />
      </span>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        onClearSearch={onClearSearch}
      />
      <div className="flex items-center gap-x-3">
        <Button size="icon" variant="outline" onClick={toggleDarkMode}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
        {userInfo ? (
          <ProfileInfo userInfo={userInfo} onLogout={handleLogout} />
        ) : (
          <div className="flex items-center gap-x-3"></div>
        )}{" "}
      </div>
    </nav>
  );
};

export default Navbar;
