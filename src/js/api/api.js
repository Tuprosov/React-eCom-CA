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
        throw new Error("Search failed. Try again");
      }

      return await response.json();
    } catch (error) {
      throw error;
      return [];
    }
  }

  // Get products
  async getProducts() {
    const url = new URL(this.baseURL);

    try {
      const response = await this.attemptFetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products. Try again later");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  // Get a specific product by ID
  async getProductById(id) {
    const url = new URL(`${this.baseURL}/${id}`);

    try {
      const response = await this.attemptFetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async attemptFetch(url, retries = 4, delay = 1000) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers(),
      });
      return response;
    } catch (error) {
      if (retries > 0) {
        await new Promise((res) => setTimeout(res, delay));
        return this.attemptFetch(url, retries - 1, delay * 2);
      }
      throw error;
    }
  }
}
