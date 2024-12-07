import Link from "next/link";

type Product = {
  id: string;
  name: string;
};

export const revalidate = 60;

export default async function HomePage() {
  try {
    const response = await fetch("http://localhost:3000/api/products");

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const products: Product[] = await response.json();

    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Failed to load products. Please try again later.</div>;
  }
}
