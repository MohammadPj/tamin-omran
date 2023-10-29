export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export interface IDictionaries {
  common: {
    showMore: string
  },
  home: {
    title: string;
    subtitle: string;
    showProducts: string;
    newProducts: string;

    InformationSection1: {
      title: string;
      subtitle: string;
      benefits: {
        title: string;
        description: string;
      }[];
    };
  };
}
