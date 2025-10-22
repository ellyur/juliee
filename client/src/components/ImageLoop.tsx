import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images - Nature wedding photos
import imageLoop1 from '@assets/3_1760525670925.jpg';
import imageLoop2 from '@assets/7_1760525677152.jpg';
import imageLoop3 from '@assets/8_1760525677154.jpg';
import imageLoop4 from '@assets/11_1760525682408.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Wedding couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Wedding couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
