/**
 * SearchBar Component
 * 
 * This component displays a search bar that allows users to filter the results.
 * - Can be reused across multiple screens of the app.
 */

import { useState } from "react";
import { useQuestions } from "services/useApi";
import { Input, Button } from '@chakra-ui/react'

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { refetch } = useQuestions(searchTerm);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  const handleSearch = () => {
    refetch({ queryKey: ["questions", searchTerm] });
  };

  return (
    <>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search questions"
      />
      <Button onClick={handleSearch}>Search</Button>
    </>
  );
}
