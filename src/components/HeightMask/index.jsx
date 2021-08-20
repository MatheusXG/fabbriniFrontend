import React from 'react'
import MaskedInput from 'react-text-mask';

export default function HeightFormat(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/[0-9]/, ',', /\d/, /\d/,'m']}
        placeholderChar={'\u2000'}
      />
    );
};

