"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar({
  query,
  setQuery,
  className = "",
  isSearching = false,
  error = null,
  onClear,
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
            isSearching ? "text-primary animate-pulse" : "text-muted-foreground"
          }`}
        />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shlokas by title or content..."
          className={`w-full pl-10 pr-10 py-2 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary ${
            error ? "border-destructive" : ""
          }`}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  );
}
