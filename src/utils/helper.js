export function filterList(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filterData;
}
