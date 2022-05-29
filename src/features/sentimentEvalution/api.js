export const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
    response.json()
  );
};
