/// <reference types="react" />

declare type RFC<T = {}> = React.FC<T & { children?: React.ReactNode }>;

declare interface LayoutProps {
  children: React.ReactNode;
}
