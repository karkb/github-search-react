import React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  onChange?: (event: any) => void;
}

const StyledInput = styled.input`
  border: 1px solid #dfe5f1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 14px;
  color: #18273a;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
`;

const CustomInput = (props: SearchInputProps) => {
  return (
    <StyledInput
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type="search"
      // disabled={props.disabled}
      {...props}
    />
  );
};

export default CustomInput;
