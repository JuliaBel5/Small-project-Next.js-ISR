import { NextResponse } from "next/server";

const products = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: 100,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    price: 200,
  },
];

export async function GET() {
  return NextResponse.json(products);
}
