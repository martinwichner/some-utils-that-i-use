/**
 * Checks if the object has the given property
 * @param obj Object to check
 * @param property Property to check
 * @returns True if obj has property, otherwise false
 */
export const objectContainsProperty = (obj: any, property: string) => {
  return obj[property] !== undefined;
};

/**
 * Finds the highest value of a given property in the array
 * @param items Array of items that should be searched
 * @param prop Property to search for
 * @returns the highest value of the given property, if items contains 0 items,* the items in the list do not have the property or the property is not a number it will return undefinded
 */
export const findMax = (items: any[], prop: string) => {
  if (items.length > 0) {
    if (objectContainsProperty(items[0], prop)) {
      if (!isNaN(Number(items[0][prop].toString()))) {
        return Math.max.apply(
          Math,
          items.map(function (o) {
            return o[prop];
          }),
        );
      }
    }
  }
  return undefined;
};
