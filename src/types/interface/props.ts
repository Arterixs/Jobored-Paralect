import { ReactNode } from 'react';
import { TypeInput } from 'types/types/type-elem';
import { ButtonClasses, CardWrapClasses, InputClasses } from '../enums/classes';

export interface CardWrapProps {
  children: ReactNode;
  className: CardWrapClasses;
}

export interface ButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: ButtonClasses;
}

export interface InputProps {
  className: InputClasses;
  type: TypeInput;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}