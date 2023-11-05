import { FilterSection, Input, StyledTitle, StyledSection } from './Filter.styled.js';

export const Filter = ({ Filter, onSearchNumber }) => {
  return (
    <FilterSection>
      <StyledSection>

          <StyledTitle>Find contacts by name</StyledTitle>
      <Input
        type="text"
        value={Filter}
        onChange={e => onSearchNumber(e.target.value)}
        placeholder="Number filter"
      />
      </StyledSection>
    
    </FilterSection>
  );
};
