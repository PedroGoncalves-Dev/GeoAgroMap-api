export interface TransformedDataResponse {
  variable: {
    id: string;
    name: string;
    unit: string;
  };
  product: {
    id: string;
    name: string;
  };
  data: Array<{
    location: {
      id: string;
      name: string;
      level: {
        id: string;
        name: string;
      };
    };
    values: Record<string, string | number>;
  }>;
}
