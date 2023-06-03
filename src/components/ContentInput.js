import React, { useState, forwardRef } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.text : theme.inputLabel};
`;

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: ${({ theme, isFocused }) =>
    isFocused ? theme.text : theme.inputBorder};

  border-width: 1px;
  border-radius: 4px;
`;

const ContentInput = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      returnKeyType,
      maxLength,
      isPassword,
      containerStyle,
      focusOn,
      multiline,
      style,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(0);
    return (
      <Container containerStyle={containerStyle}>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          isFocused={isFocused}
          focusOn={() => {
            setIsFocused(true);
            {
              focusOn;
            }
          }}
          secureTextEntry={isPassword}
          multiline={multiline}
          style={style}
        />
      </Container>
    );
  }
);

ContentInput.defaultProps = {
  onBlur: () => {},
};
export default ContentInput;
