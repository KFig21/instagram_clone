import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import UploadImageModal from "../components/upload/UploadImageModal";

export default function UploadPost() {
  const [type, setType] = useState("");
  const location = useLocation();

  useEffect(() => {
    setType(location.state.type);
  }, [location.state.type, type]);

  return (
    <div className="bg-gray-background">
      <Header />
      <div
        className="mx-auto max-w-screen-lg justify-center items-center flex"
        style={{ height: "75vh" }}
      >
        <UploadImageModal type={type} />
      </div>
    </div>
  );
}
