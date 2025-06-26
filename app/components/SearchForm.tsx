import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "Test";
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        defaultValue={""}
        name="query"
        placeholder="Search for startups, investors, or ideas..."
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
