"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

// ei function ta server e execute hobe
export const registerUser = async (payload) => {
  // console.log("Registering user with payload:", payload);
  // Here you would typically send the payload to your backend API
  const userCollection = dbConnect(collectionNameObj.users);

  // validation process
  const { name, email, password } = payload;
  if (!name || !email || !password) {
    return null;
  }
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword; // hash the password before saving
    const result = await userCollection.insertOne(payload);
    // console.log("User registered successfully:", result);
    // const { acknowledged,insertedId} = result;
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
};
