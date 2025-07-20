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
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>User Info</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <h3 className="capitalize text-[15px] font-bold">
              {userInfo.fullName}
            </h3>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className=" text-[15px] font-bold">{userInfo.email}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <button
              onClick={onLogout}
              className="bg-red-500 cursor-pointer flex items-center justify-between w-full text-white p-3 rounded-md"
            >
              <p className="text-sm">Logout</p>
              <HiOutlineLogout size={24} />
            </button>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileInfo;
