type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export async function generateStaticParams() {
  const products = await fetch("http://localhost:3000/api/products").then(
    (res) => res.json()
  );
  return products.map((product: { id: string }) => ({ id: product.id }));
}

export const revalidate = 60;

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const products: Product[] = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </main>
  );
}
