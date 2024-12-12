import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Customers() {
  return <h2>Customers page</h2>;
}
