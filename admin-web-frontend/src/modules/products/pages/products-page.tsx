import { Navigate } from "react-router-dom";

export default function ProductsPage() {
  return <Navigate to="/products/home" replace={true} />;
}
