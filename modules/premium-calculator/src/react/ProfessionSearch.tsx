"use client";

import { useEffect, useId, useRef, useState } from "react";
import { searchProfessions } from "../search";
import type { Profession } from "../types";
import type { PremiumCalculatorClassNames } from "./types";

type ProfessionSearchProps = {
  professions: Profession[];
  selected: Profession | null;
  onSelect: (profession: Profession) => void;
  onClear: () => void;
  labels: {
    searchLabel: string;
    searchPlaceholder: string;
  };
  classNames?: PremiumCalculatorClassNames;
};

export function ProfessionSearch({
  professions,
  selected,
  onSelect,
  onClear,
  labels,
  classNames,
}: ProfessionSearchProps) {
  const listboxId = useId();
  const inputId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState(selected?.name ?? "");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const suggestions =
    open && query.trim().length > 0
      ? searchProfessions(professions, query, 12)
      : [];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function selectProfession(profession: Profession) {
    onSelect(profession);
    setQuery(profession.name);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor={inputId}
        className={
          classNames?.searchLabel ??
          "mb-1.5 block text-sm font-medium text-navy"
        }
      >
        {labels.searchLabel}
      </label>
      <input
        id={inputId}
        type="search"
        role="combobox"
        aria-expanded={open && suggestions.length > 0}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          open && suggestions[activeIndex]
            ? `${listboxId}-option-${activeIndex}`
            : undefined
        }
        autoComplete="off"
        value={query}
        placeholder={labels.searchPlaceholder}
        className={
          classNames?.searchInput ??
          "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-navy placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        }
        onChange={(event) => {
          const value = event.target.value;
          setQuery(value);
          setOpen(true);
          setActiveIndex(0);
          if (selected && value !== selected.name) {
            onClear();
          }
        }}
        onFocus={() => {
          if (query.trim()) setOpen(true);
        }}
        onKeyDown={(event) => {
          if (!open || suggestions.length === 0) {
            if (event.key === "ArrowDown" && query.trim()) {
              setOpen(true);
            }
            return;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
          } else if (event.key === "Enter") {
            event.preventDefault();
            const choice = suggestions[activeIndex];
            if (choice) selectProfession(choice);
          } else if (event.key === "Escape") {
            setOpen(false);
          }
        }}
      />

      {open && suggestions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className={
            classNames?.suggestions ??
            "absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-navy/10 bg-white py-1 shadow-lg"
          }
        >
          {suggestions.map((profession, index) => {
            const active = index === activeIndex;
            return (
              <li
                key={profession.id}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={active}
                className={
                  active
                    ? (classNames?.suggestionItemActive ??
                      "cursor-pointer bg-blue/5 px-4 py-2.5 text-sm text-navy")
                    : (classNames?.suggestionItem ??
                      "cursor-pointer px-4 py-2.5 text-sm text-navy hover:bg-soft-bg")
                }
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => {
                  event.preventDefault();
                  selectProfession(profession);
                }}
              >
                {profession.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
