/// <reference types="React" />

declare interface AnyObj<T = any> {
  [key: string]: T;
}

/**
 * children FC
 */
declare type RFC<T = AnyObj> = React.FC<T & { children?: React.ReactNode }>;
