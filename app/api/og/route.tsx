import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(to bottom right, #e0f2fe, #fff)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          border: "4px solid #0ea5e9",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}
      >
        {/* Logo Placeholder or Text */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#0f172a",
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          Bhardwaj International School
        </div>

        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#0ea5e9",
            marginBottom: 40,
            fontFamily: "sans-serif",
            letterSpacing: "2px",
          }}
        >
          EXCELLENCE IN EDUCATION
        </div>

        <div
          style={{
            display: "flex",
            padding: "12px 30px",
            backgroundColor: "#0f172a",
            color: "white",
            borderRadius: "10px",
            fontSize: 24,
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          Admissions Open
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
