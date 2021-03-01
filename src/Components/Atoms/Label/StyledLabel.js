import styled from 'styled-components'

import {
  cyberBlue
} from '../../../css_vars.js'

const StyledLabel = styled.p`
  labelEle {
    font-size:16px;
    line-height:18px;

    span {
      color:$cyberBlue;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export default StyledLabel;
