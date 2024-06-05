import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '9999px', 
    backgroundColor: '#fff', 
    '& fieldset': {
      borderColor: 'transparent', 
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="w-1/2"> 
      <CustomTextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={onSearchChange}
        value={search}
        InputLabelProps={{
          style: { color: '#9CA3AF' }, 
        }}
      />
    </div>
  );
};

export default SearchBar;
