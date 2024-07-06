export type Code = {
  html: string;
  css: string;
  js: string;
};

export type ElementItem = {
  title: string;
  path: string;
  id: string;
  code: Code;
};

export type Category = {
  title: string;
  childrens: ElementItem[];
  open?: boolean;
};

