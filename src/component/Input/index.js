import React from 'react';
import PropTypes from 'prop-types';
import {Input, InputContainer, InputLabel, IconInput, Helper} from './style';

import {fixOnChangeMoney} from '../../utils/format';

const InputComponent = ({
  label,
  ref,
  onFocus,
  onBlur,
  secureTextEntry,
  editable,
  keyboardType,
  multiline,
  numberOfLines,
  onChange,
  onChangeText,
  onKeyPress,
  onSubmitEditing,
  placeholder,
  value,
  light,
  returnKeyType,
  icon,
  autoFocus,
  big,
  autoCapitalize,
  valuestyle,
  small,
  getRef,
  nextField,
  helper,
}) => {
  return (
    <InputContainer>
      {label && (
        <InputLabel editable={editable} light={light} big={big}>
          {label}
        </InputLabel>
      )}
      {
        <Input
          ref={(refProps) => ref || (getRef && getRef(refProps))}
          big={big}
          icon={icon}
          autoFocus={autoFocus}
          light={light}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          editable={editable}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChange={onChange}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
          onSubmitEditing={() =>
            onSubmitEditing || (nextField && nextField.focus())
          }
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          value={value}
          returnKeyType={returnKeyType}
          valuestyle={valuestyle}
          placeholderTextColor={`${light ? 'white' : '#92A3B8'}`}
          small={small}
          style={{fontSize: 17}}
        />
      }
      {helper && <Helper>{helper}</Helper>}
    </InputContainer>
  );
};

InputComponent.propTypes = {
  editable: PropTypes.bool,
  big: PropTypes.bool,
  valuestyle: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

InputComponent.defaultProps = {
  editable: true,
  big: false,
  valuestyle: false,
  numberOfLines: 1,
  multiline: false,
};

export default InputComponent;
