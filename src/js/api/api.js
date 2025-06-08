import { headers } from "../utils/headers.js";
export class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  //Search Products
  // async searchProducts(query) {
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/search?q=${encodeURIComponent(query)}`
  //     );
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch Products: ${response.statusText}`);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //     throw error;
  //   }
  // }

  // Modify searchProducts function
  async searchProducts(query) {
    try {
      const url = new URL(`${this.baseURL}/search`);
      url.searchParams.append("q", query.trim());

      const response = await fetch(url, {
        method: "GET",
        headers: headers(),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch Products: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  }

  // Get products
  async getProducts() {
    const url = new URL(this.baseURL);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers(),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Products");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  }

  // Get a specific product by ID
  async getProductById(id) {
    const url = new URL(this.baseURL);
    const newUrl = new URL(`${url}/${id}`);

    try {
      const response = await fetch(newUrl, {
        method: "GET",
        headers: headers(),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product", error);
    }
  }
}
