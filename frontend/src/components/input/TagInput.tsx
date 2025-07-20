import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type TagInputProps = {
  tags: string[];
  setTags: (tags: string[]) => void;
};

const TagInput = ({ tags, setTags }: TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag and press Enter"
          className="flex-2 text-sm px-3 py-2 border rounded-md outline-none"
        />
        <Button onClick={addNewTag} type="button">
          <MdAdd />
        </Button>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="relative bg-slate-100 text-sm px-3 py-1 rounded-md"
            >
              #{tag}
              <Button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className=" absolute -top-2 text-white -right-2 w-4 h-6 flex items-center justify-center rounded-full"
              >
                <MdClose className="text-[4px]" />
              </Button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
