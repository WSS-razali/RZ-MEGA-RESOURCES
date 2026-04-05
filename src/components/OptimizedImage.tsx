"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}
