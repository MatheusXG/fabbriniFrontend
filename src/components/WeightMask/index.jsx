import React from 'react'
import MaskedInput from 'react-text-mask';

export default function WeightFormat(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/[1-9]/,/\d/,/\d/]}
        placeholderChar={'\u2000'}
      />
    );
};

