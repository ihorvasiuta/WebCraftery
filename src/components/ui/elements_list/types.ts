export type Code = {
  html: string;
  css: string;
  js: string;
};

export type ElementItem = {
  title: string;
  fullname: string;
  description: string;
  demo_url: string;
  path: string;
  id: string;
  code: Code;
  important?: string;
  download_path?: string;
  images_path?: string;
  images?: boolean;
  clone_url?: string;
  visit_url?: string;
};

export type Category = {
  title: string;
  childrens: ElementItem[];
  open?: boolean;
};

