import { ProductItemPage } from "@/app/components/ProductItemPage";
import { fetchProducts } from "@/app/services/productService";
import { Product } from "@/app/types/product";

export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await fetchProducts(); // the revalidation is set to 60 sec
  return products.map((product: { id: number }) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const products: Product[] = await fetchProducts();
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <ProductItemPage product={product} />
    </div>
  );
}
