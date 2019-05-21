import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { RingLoader} from 'react-spinners';

const override = css`
    display: block;
    margin-left:  auto;
    margin-right:auto;
    border-color: red;
`;

class Loading extends React.Component {
  render() {
    return (
      <div className='sweet-loading'>
        <RingLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
        />
      </div> 
    )
  }
}

export default Loading