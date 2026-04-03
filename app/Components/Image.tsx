"use client";

interface SecondaryImageProps {
  /** URL de la imagen */
  src: string;
  /** Texto alternativo de la imagen */
  alt?: string;
  /** Posición de la imagen dentro del contenedor */
  position?: "left" | "right" | "center";
  /** Título opcional sobre la imagen */
  title?: string;
  /** Descripción opcional debajo de la imagen */
  description?: string;
  /** Clase CSS adicional para el contenedor */
  className?: string;
  /** Clase CSS adicional para la imagen */
  imageClassName?: string;
  /** Ancho de la imagen */
  width?: number | string;
  /** Alto de la imagen */
  height?: number | string;
  /** Si debe ocupar el ancho completo */
  fullWidth?: boolean;
  /** Redondeo de bordes */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** Sombra */
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
}

export default function SecondaryImage({
  src,
  alt,
  position = "center",
  title,
  description,
  className = "",
  imageClassName = "",
  width = "100%",
  height = "auto",
  fullWidth = false,
  rounded = "2xl",
  shadow = "sm",
}: SecondaryImageProps) {
  const positionClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`flex ${positionClasses[position]} ${fullWidth ? "w-full" : ""}`}
      >
        <div
          className={`${fullWidth ? "w-full" : ""} ${roundedClasses[rounded]} ${shadowClasses[shadow]} overflow-hidden bg-gray-100`}
          style={{
            maxWidth: fullWidth
              ? "100%"
              : typeof width === "number"
                ? `${width}px`
                : width,
          }}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-auto object-cover ${roundedClasses[rounded]} ${imageClassName}`}
            loading="lazy"
          />
        </div>
      </div>
      {(title || description) && (
        <div className="mt-4 text-center">
          {title && (
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          )}
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
      )}
    </div>
  );
}
