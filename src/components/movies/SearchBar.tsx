import { useState } from "react";
import { Button } from "../ui/button";

export default function MovieSearchBar({ onSearch, disabled }: {
  onSearch: (query: string) => void;
  disabled: boolean;
}) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search by title or keyword…"
        className="input px-2"
        disabled={disabled}
      />
      <Button onClick={() => onSearch(input)} disabled={disabled}>
        Search
      </Button>
    </div>
  );
}
