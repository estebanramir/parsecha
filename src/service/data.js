
export const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching data", err);
      throw err; // Re-throw the error so it can be caught by the calling function
    }
  };