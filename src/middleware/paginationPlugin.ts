export function paginate(page: number, limit: number) {
  !limit ? (limit = 10) : (limit = limit);
  !page ? (page = 1) : (page = page);
  const skip = (page - 1) * limit;
  const take = page * limit;
  return { take, skip };
}
