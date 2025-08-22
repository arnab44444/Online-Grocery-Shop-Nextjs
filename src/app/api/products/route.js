import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productsCollection = dbConnect(collectionNameObj.products);
    const products = await productsCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📦 Incoming product body:", body);

    if (!body.name || !body.price) {
      return NextResponse.json(
        { error: "Name and Price are required" },
        { status: 400 }
      );
    }

    const productsCollection = dbConnect(collectionNameObj.products);

    const result = await productsCollection.insertOne(body);

    return NextResponse.json(
      { message: "Product added successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
