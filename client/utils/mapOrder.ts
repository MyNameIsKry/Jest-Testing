export const mapOrder = (
  originalArray: any[],
  orderArray: any[],
  key: string
) => {
  if (!originalArray || !orderArray || !key) return [];
  return [...originalArray].sort((a, b) => {
    const indexA = orderArray.indexOf(a[key]);
    const indexB = orderArray.indexOf(b[key]);
    return (
      (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB)
    );
  });
};
