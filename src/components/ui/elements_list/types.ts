export type Code = {
  html: string;
  css: string;
  js: string;
};

export type ElementItem = {
  title: string;
  description: string;
  demo_url: string;
  path: string;
  id: string;
  code: Code;
  important?: string;
};

export type Category = {
  title: string;
  childrens: ElementItem[];
  open?: boolean;
};

