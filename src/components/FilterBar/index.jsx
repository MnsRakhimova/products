import React from "react";
import { FilterBar, Filtering, InputWrapper, Input, SearchIcon } from "./style";

function FilteringBar() {
  return (
    <FilterBar>
      <Filtering>А-В </Filtering>
      <Filtering>Г-Е</Filtering>
      <Filtering>Ё-З</Filtering>
      <Filtering>И-К</Filtering>
      <Filtering>Л-Н</Filtering>
      <Filtering>О-Р</Filtering>
      <Filtering>С-У</Filtering>
      <Filtering>Ф-Ц</Filtering>
      <Filtering>Ч-Щ</Filtering>
      <Filtering>Э-Я</Filtering>
      <InputWrapper>
        <Input placeholder="Your text..." />
        <SearchIcon />
      </InputWrapper>
    </FilterBar>
  );
}

export default FilteringBar;
