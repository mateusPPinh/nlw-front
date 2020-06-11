import React, { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";

import "./styles.css";

const Dropzone = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileURL = URL.createObjectURL(file);

    setSelectedFileUrl(fileURL);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Upload Thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Clique / Arraste aqui uma imagem do estabelecimento.
        </p>
      )}
    </div>
  );
};

export default Dropzone;
