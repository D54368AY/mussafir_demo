export type FaqItem = {
  id?: string | number;
  question: string;
  answer: string;
};

export type FaqProps = {
  items: FaqItem[];
  allowMultiple?: boolean;
};

