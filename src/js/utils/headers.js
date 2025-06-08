import { API_KEY } from "../constants.js";

/**
 * Constructs and returns HTTP headers for API requests.
 *
 * Includes:
 * - X-Noroff-API-Key header if an API key is available
 * - Authorization header if a token is found in localStorage
 * - Content-type header set to application/json
 *
 * @returns {Headers} Configured HTTP headers for fetch requests
 */
export function headers() {
  const headers = new Headers();
  const token = JSON.parse(localStorage.getItem("token"));

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  headers.append("Content-type", "application/json");

  return headers;
}
