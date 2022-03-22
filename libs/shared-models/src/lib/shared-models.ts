export interface CountryEntity {
  country: string; // id
  code: string;
}

export interface ContentText {
  [n: string]: {
      name: string
  } | ContentText;
};
