interface ExperiencePhotoGridProps {
  images: string[];
  alt: string;
  imageLayout?: 'collage-right-tall';
}

export function ExperiencePhotoGrid({ images, alt, imageLayout }: ExperiencePhotoGridProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
        <img
          src={images[0]}
          alt={alt}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover pointer-events-none select-none"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 aspect-[4/3] sm:aspect-[16/9]">
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="overflow-hidden">
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    if (imageLayout === 'collage-right-tall') {
      return (
        <div className="grid grid-cols-2 gap-1 aspect-square sm:aspect-[4/3]">
          <div className="grid grid-rows-2 gap-1 h-full min-h-0">
            <div className="overflow-hidden h-full min-h-0">
              <img
                src={images[0]}
                alt={alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover pointer-events-none select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="overflow-hidden h-full min-h-0">
              <img
                src={images[1]}
                alt={alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover pointer-events-none select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
          <div className="overflow-hidden h-full min-h-0">
            <img
              src={images[2]}
              alt={alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-right pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-3 gap-1 aspect-[4/3] sm:aspect-[16/9]">
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="overflow-hidden">
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 4) {
    return (
      <div className="grid grid-cols-2 gap-1 aspect-square sm:aspect-[4/3]">
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="overflow-hidden">
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-1 aspect-square sm:aspect-[4/3]">
      {images.slice(0, 2).map((src, i) => (
        <div key={`${src}-${i}`} className="col-span-3 overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover pointer-events-none select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      ))}
      {images.slice(2).map((src, i) => (
        <div key={`${src}-${i + 2}`} className="col-span-2 overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover pointer-events-none select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
