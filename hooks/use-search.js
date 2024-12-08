import { useState, useCallback, useEffect } from "react";
import { slokas } from "@/lib/slokas";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [filteredResults, setFilteredResults] = useState(slokas);

  useEffect(() => {
    setError(null);
    setIsSearching(true);

    try {
      if (!searchQuery.trim()) {
        setFilteredResults(slokas);
      } else {
        const searchText = searchQuery.toLowerCase();
        const filtered = slokas.filter((sloka) => {
          const matchInLanguage = (language) =>
            sloka.title[language]?.toLowerCase().includes(searchText) ||
            sloka.text[language]?.toLowerCase().includes(searchText) ||
            sloka.meaning[language]?.toLowerCase().includes(searchText);

          return matchInLanguage("english") || matchInLanguage("telugu");
        });
        setFilteredResults(filtered);
      }
    } catch (err) {
      setError("An error occurred while searching");
      setFilteredResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setError(null);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    filteredSlokas: filteredResults,
    isSearching,
    error,
    clearSearch,
  };
}
