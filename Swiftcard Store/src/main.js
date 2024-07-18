import "./style.css";
import Alpine from "alpinejs";
import { getCategories, fetchSingleProduct } from "./data/api.js";

window.Alpine = Alpine;

Alpine.start();

Alpine.data("homeComponent", () => ({
  products: [],
  async fetchProducts() {
    // Simulated fetch for products (Replace with real API call)
    this.products = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://via.placeholder.com/150",
      },
    ];
  },
  async init() {
    // Fetch categories example
    const categories = await getCategories();
    if (categories.error) {
      console.error(categories.error);
    } else {
      console.log(categories.response);
    }

    // Fetch a single product example
    const singleProduct = await fetchSingleProduct(1);
    if (singleProduct.error) {
      console.error(singleProduct.error);
    } else {
      console.log(singleProduct.response);
    }

    this.fetchProducts();
  },
}));
