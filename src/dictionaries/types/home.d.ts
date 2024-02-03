export interface IHomeDictionary {
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

  homeSection2: {
    title: string;
    description1: string;
    description2: string;
  },

}