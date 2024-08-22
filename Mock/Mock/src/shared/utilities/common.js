export function clone(data) {
  if (!data) return data;
  const result = JSON.parse(JSON.stringify(data));
  return result;
}

export function compare(data1, data2) {
  if (data1 === null && data2 === null) return true;
  if (data1 !== null && data2 === null) return false;
  if (data1 === null && data2 !== null) return false;
  const json1 = JSON.stringify(data1);
  const json2 = JSON.stringify(data2);
  return json1 === json2;
}
