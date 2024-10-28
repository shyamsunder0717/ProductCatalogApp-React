// Mock data for 5000 products and pincodes
export const products = Array.from({ length: 5000 }, (_, index) => ({
    id: index,
    name: `Product ${index + 1}`,
    inStock: Math.random() < 0.8, // 80% in stock
  }));
  
  export const pincodes = {
    "110001": "Provider A",
    "200001": "Provider B",
    "300001": "General Partners",
    // Add more pincode mappings
  };
  