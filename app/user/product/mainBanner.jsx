'use client';

import ImageSlider from "@/components/Slider/ImageSlider";

// TODO: 추후 DB화 시킬 예정
const images = [
    { src: 'https://picsum.photos/1496/500', alt: 'Image 1' },
    { src: 'https://picsum.photos/1496/500', alt: 'Image 2' },
    { src: 'https://picsum.photos/1496/500', alt: 'Image 3' },
];

export default function MainBanner() {

  return (
    <section className="p-5">
      <div className="rounded-lg">
          <ImageSlider images={images} />
      </div>
    </section>
  );

}

