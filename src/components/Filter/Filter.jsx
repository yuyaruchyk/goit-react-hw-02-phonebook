import { FilterSection, Input } from './Filter.styled.js';

export const Filter = ({ Filter, onSearchNumber }) => {
  return (
    <FilterSection>
      <p>Find contacts by name</p>
      <Input
        type="text"
        value={Filter}
        onChange={e => onSearchNumber(e.target.value)}
        placeholder="Number filter"
      />
    </FilterSection>
  );
};
