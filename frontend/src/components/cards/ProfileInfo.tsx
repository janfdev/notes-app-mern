import { HiOutlineLogout } from "react-icons/hi";
import { UserInfo } from "../../utils/types/types";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Mail, UserCircle } from "lucide-react";

type ProfileInfoProps = {
  onLogout: () => void;
  userInfo: UserInfo;
};

const ProfileInfo = ({ userInfo, onLogout }: ProfileInfoProps) => {
  const handleInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="uppercase w-8 h-8 flex items-center justify-center rounded-full">
            {handleInitials(userInfo.fullName)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4">
          <DropdownMenuLabel>User Info</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <UserCircle />
            <h3 className="capitalize text-[15px] font-bold">
              {userInfo.fullName}
            </h3>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Mail />
            <p className=" text-[15px] font-bold">{userInfo.email}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <button
              onClick={onLogout}
              className="bg-red-500 cursor-pointer flex items-center justify-between gap-3 text-white py-1.5 px-2 w-full rounded-md"
            >
              <HiOutlineLogout />
              <p>Logout</p>
            </button>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileInfo;
