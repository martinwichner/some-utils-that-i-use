export const objectContainsProperty = (obj: any, property: string) => {
  return obj[property] !== undefined;
};

export interface A {
  id: number;
}

export const findMaxId = (items: A[]) => {
  return Math.max.apply(
    Math,
    items.map(function (o) {
      return o.id;
    }),
  );
};
