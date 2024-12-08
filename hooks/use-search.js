import { useState, useCallback, useEffect } from "react";
import { slokas } from "@/lib/slokas";
import { logSearch, logError } from "@/lib/analytics";

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
        // Log search event
        logSearch(searchQuery);

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
      const errorMessage = "An error occurred while searching";
      setError(errorMessage);
      setFilteredResults([]);
      logError(err, "SearchComponent");
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
