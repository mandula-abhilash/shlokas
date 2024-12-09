import { useState, useCallback, useEffect, useMemo } from "react";
import { slokas } from "@/lib/slokas";
import { logSearch, logError } from "@/lib/analytics";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const filteredResults = useMemo(() => {
    setError(null);
    setIsSearching(true);

    try {
      if (!searchQuery.trim()) {
        return slokas;
      }

      logSearch(searchQuery);

      const searchText = searchQuery.toLowerCase().trim();
      const filtered = slokas.filter((sloka) => {
        const matchInLanguage = (language) => {
          const title = sloka.title[language]?.toLowerCase() || "";
          const text = sloka.text[language]?.toLowerCase() || "";
          const meaning = sloka.meaning[language]?.toLowerCase() || "";

          if (title.includes(searchText)) {
            return true;
          }

          return text.includes(searchText) || meaning.includes(searchText);
        };

        return (
          matchInLanguage("english") ||
          matchInLanguage("telugu") ||
          matchInLanguage("gujarati")
        );
      });

      return filtered;
    } catch (err) {
      const errorMessage = "An error occurred while searching";
      setError(errorMessage);
      logError(err, "SearchComponent");
      return [];
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
