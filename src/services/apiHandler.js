export async function getBooks(updateBooks) {
  const response = await fetch("http://localhost:3001/books");

  if (!response.ok) {
    throw new Error("Fetch was not successful");
  }
  
  const data = await response.json();

  updateBooks(data);
}