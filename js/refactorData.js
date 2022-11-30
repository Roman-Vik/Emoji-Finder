export function refactorData(data) {
  return data.map((el) => {
    return {
      ...el,
      keywords: el.keywords
        .split(' ')
        .filter((item, i, arr) => arr.indexOf(item) === i)
        .join(' '),
    };
  });
}
