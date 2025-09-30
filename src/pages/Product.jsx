import React from "react";

const products = [
  {
    name: "Endo Ultra Activator RebornEndo",
    image:
      "https://static.wixstatic.com/media/030a5c_03dfea157f5b440cb330f57cb77bb879~mv2.jpg/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_03dfea157f5b440cb330f57cb77bb879~mv2.jpg", // Replace with actual image URL
    price: 650,
    description: "Ultrasonic Endo Activator. NMPA, ISO certified.",
    certifications: ["NMPA", "ISO"],
  },
  {
    name: "Multifunctional Endo Motor with Apex Locator",
    image:
      "https://static.wixstatic.com/media/030a5c_bb460224bc6c4bbe9bfb5a44a343c64c~mv2.jpg/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_bb460224bc6c4bbe9bfb5a44a343c64c~mv2.jpg",
    price: 2200,
    oldPrice: 2350,
    description: "Efficient. Precise. Safe. CE, ISO, NMPA certified.",
    certifications: ["CE", "ISO", "NMPA"],
  },
  {
    name: "Ultrasonic Scaler Tips Assorted Kit EMS G1 G2 G4 P1 Piezo Scaling Tip",
    image:
      "https://static.wixstatic.com/media/030a5c_bb9fc4915f92461c98a48d4e8ad6c064~mv2.png/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_bb9fc4915f92461c98a48d4e8ad6c064~mv2.png",
    price: 180,
    description: "5 Tip Assortment, EMS compatible.",
    certifications: [],
  },
  {
    name: "Endo Ultra Activator RebornEndo",
    image:
      "https://static.wixstatic.com/media/030a5c_03dfea157f5b440cb330f57cb77bb879~mv2.jpg/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_03dfea157f5b440cb330f57cb77bb879~mv2.jpg", // Replace with actual image URL
    price: 650,
    description: "Ultrasonic Endo Activator. NMPA, ISO certified.",
    certifications: ["NMPA", "ISO"],
  },
  {
    name: "Multifunctional Endo Motor with Apex Locator",
    image:
      "https://static.wixstatic.com/media/030a5c_bb460224bc6c4bbe9bfb5a44a343c64c~mv2.jpg/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_bb460224bc6c4bbe9bfb5a44a343c64c~mv2.jpg",
    price: 2200,
    oldPrice: 2350,
    description: "Efficient. Precise. Safe. CE, ISO, NMPA certified.",
    certifications: ["CE", "ISO", "NMPA"],
  },
  {
    name: "Ultrasonic Scaler Tips Assorted Kit EMS G1 G2 G4 P1 Piezo Scaling Tip",
    image:
      "https://static.wixstatic.com/media/030a5c_bb9fc4915f92461c98a48d4e8ad6c064~mv2.png/v1/fit/w_573,h_573,q_90,enc_avif,quality_auto/030a5c_bb9fc4915f92461c98a48d4e8ad6c064~mv2.png",
    price: 180,
    description: "5 Tip Assortment, EMS compatible.",
    certifications: [],
  },
];

const ProductCard = ({ product }) => (
  <div
    style={{
      border: "1px solid #E5E5E5",
      borderRadius: "12px",
      padding: "24px",
      margin: "16px",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "350px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: "100%",
        maxHeight: "380px",
        objectFit: "contain",
        marginBottom: "16px",
      }}
    />
    {/* <h3
      style={{
        fontSize: "1.1rem",
        fontWeight: "600",
        margin: "12px 0",
      }}
    >
      {product.name}
    </h3> */}
    <div style={{ marginBottom: "6px" }}>
      <div style={{ fontSize: "0.96rem", marginBottom: "10px", color: "#456" }}>
        {product.description}
      </div>
      {product.oldPrice && (
        <span
          style={{
            textDecoration: "line-through",
            color: "#888",
            fontSize: "1rem",
            marginRight: "8px",
          }}
        >
          AED{product.oldPrice}.00
        </span>
      )}
      <span
        style={{ color: "#1E7D56", fontWeight: "700", fontSize: "1.07rem" }}
      >
        AED{product.price}.00
      </span>
    </div>

    {/* <div style={{ marginBottom: "14px" }}>
      {product.certifications.map((cert) => (
        <span
          key={cert}
          style={{
            display: "inline-block",
            background: "#F4F4F4",
            color: "#339",
            fontSize: "0.85rem",
            borderRadius: "6px",
            padding: "3px 8px",
            marginRight: "4px",
          }}
        >
          {cert}
        </span>
      ))}
    </div> */}
    {/* <button
      style={{
        background: "#26C48A",
        color: "#fff",
        padding: "10px 24px",
        fontSize: "1rem",
        fontWeight: "600",
        border: "none",
        borderRadius: "24px",
        cursor: "pointer",
        marginTop: "auto",
      }}
    >
      Add to Cart
    </button> */}
  </div>
);

const ProductPage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      background: "#F7F9FB",
      minHeight: "100vh",
      padding: "40px",
    }}
  >
    {products.map((product, idx) => (
      <ProductCard key={idx} product={product} />
    ))}
  </div>
);

export default ProductPage;
