import { InputFieldProps } from './interface';
import styled, { css } from 'styled-components';
import Theme from '../../theme';

export const Component = styled.div<any>`
   position: relative;
   margin-bottom: 1rem;
   color: ${Theme.colors.textDark};
   @media (min-width: ${Theme.breakPoints.ipad}) {
      ${(props) =>
         props.variant === 'fill' &&
         css`
            max-width: 1000px;
            width: 100%;
            margin: 0 20px 0 20px;
            margin-bottom: 1rem;
         `}
   }
   svg {
      position: absolute;
      z-index: 1;
      left: 1.5rem;
      top: 0;
      bottom: 0;
      margin: auto;
      & + input {
         padding-left: 3.5rem;
      }
      @media (min-width: ${Theme.breakPoints.ipad}) {
         left: 2rem;
         width: 24px;
         height: 24px;
         & + input {
            padding-left: 5rem;
            font-size: 24px;
            &::placeholder {
               font-size: 24px;
            }
         }
      }
   }
`;

export const InputComponent = styled.input<InputFieldProps>`
   display: block;
   width: 100%;
   font-weight: 400;
   color: white;
   background-color: transparent;
   padding: 1rem 0.5rem;
   transition: 0.3s;
   outline: 0;
   ${(props) =>
      props.variant === 'outline' &&
      css`
         border: 0px solid #e9e9f040;
         border-bottom-width: 2px;
         font-size: 16px;
         color: ${Theme.colors.textDark};
         transition: 0.5s;
         transform-origin: left;
         & + label {
            left: 0.5rem;
            font-size: 16px;
         }
      `}
   ${(props) =>
      props.variant === 'fill' &&
      css`
         border: 1px solid ${Theme.colors.inputBorder};
         border-radius: 10rem;
         height: 50px;
         color: ${Theme.colors.textDark};
         padding: 0.5rem 1.5rem;
         background: ${Theme.colors.textWhite};
         backdrop-filter: blur(30px);
         max-width: 1000px;
         & + {
            color: #8d9da2;
            font-size: 16px;
            font-weight: 500;
         }
         @media (min-width: ${Theme.breakPoints.ipad}) {
            height: 75px;
         }
      `}
      border-color: ${(props) => props.isError && '#C53030'};
`;
export const LabelComponent = styled.label<
   HTMLLabelElement | { focused: boolean }
>`
   position: absolute;
   top: 0;
   left: 0;
   color: white;
   transition: 0.3s;
   pointer-events: none;
   transform: ${(props) =>
      props.focused
         ? 'translate(-.5rem, -.75rem) scale(0.75)'
         : 'translate(0, .5rem) scale(1)'};
`;