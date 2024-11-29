
import { useEffect } from 'react';
import 'animate.css';
import pic1 from '/src/Components/Images/pic1.jpg';
import pic2 from '/src/Components/Images/pic2.jpg';
import pic3 from '/src/Components/Images/pic 3.jpg';
import pic4 from '/src/Components/Images/pic4.jpg';
import pic5 from '/src/Components/Images/pic5.jpg';
import pic6 from '/src/Components/Images/pic6.jpg';
import pic7 from '/src/Components/Images/pic7.jpg';
import pic8 from '/src/Components/Images/pic8.jpg';
import pic9 from '/src/Components/Images/pic9.jpg';
import pic10 from '/src/Components/Images/pic10.jpg';
import pic11 from '/src/Components/Images/pic11.jpg';
import pic12 from '/src/Components/Images/pic12.jpg';
import pic13 from '/src/Components/Images/pic13.jpg';
import pic14 from '/src/Components/Images/pic14.jpg';
import pic15 from '/src/Components/Images/pic15.jpg';
import pic16 from '/src/Components/Images/pic16.jpg';
import pic17 from '/src/Components/Images/pic17.jpg';
import pic18 from '/src/Components/Images/pic18.jpg';
import pic19 from '/src/Components/Images/pic19.jpg';
import pic20 from '/src/Components/Images/pic20.jpg';
import pic21 from '/src/Components/Images/pic21.jpg';
import pic22 from '/src/Components/Images/pic22.jpg';
import pic23 from '/src/Components/Images/pic23.jpg';
import pic24 from '/src/Components/Images/pic24.jpg';
import pic25 from '/src/Components/Images/pic25.jpg';
import pic26 from '/src/Components/Images/pic26.jpg';
import pic27 from '/src/Components/Images/pic27.jpg';
import pic28 from '/src/Components/Images/pic28.jpg';
import pic30 from '/src/Components/Images/pic30.jpg';
import pic31 from '/src/Components/Images/pic31.jpg';
import pic32 from '/src/Components/Images/pic32.jpg';
import pic33 from '/src/Components/Images/pic33.jpg';
import pic34 from '/src/Components/Images/pic34.jpg';
import pic35 from '/src/Components/Images/pic35.jpg';
import pic36 from '/src/Components/Images/pic36.jpg';
import pic37 from '/src/Components/Images/pic37.jpg';
import pic38 from '/src/Components/Images/pic38.jpg';
import pic39 from '/src/Components/Images/pic39.jpg';
import pic41 from '/src/Components/Images/pic41.jpg';
import pic43 from '/src/Components/Images/pic43.jpg';
import pic44 from '/src/Components/Images/pic44.jpg';
import pic45 from '/src/Components/Images/pic45.jpg';
import pic46 from '/src/Components/Images/pic46.jpg';
import pic47 from '/src/Components/Images/pic47.jpg';
import pic48 from '/src/Components/Images/pic48.jpg';
import pic49 from '/src/Components/Images/pic49.jpg';
import pic50 from '/src/Components/Images/pic50.jpg';
import pic51 from '/src/Components/Images/pic51.jpg';
import pic52 from '/src/Components/Images/pic52.jpg';
import pic53 from '/src/Components/Images/pic53.jpg';

// Add more imports as necessary

function Gallery() {
  useEffect(() => {
    const images = document.querySelectorAll('.gallery-image');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1 className="my-2 text-center text-4xl text-deep-chocolate">Photo Gallery</h1>
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child):mt-8">
          <img className="gallery-image" src={pic1} alt="Photo" />
                <img  className="gallery-image" src={pic3} alt="Photo" />
                <img  className="gallery-image" src={pic10} alt="Photo" />
                <img  className="gallery-image" src={pic28} alt="Photo" />
                <img  className="gallery-image" src={pic5} alt="Photo" />
                <img  className="gallery-image" src={pic6} alt="Photo" />
                <img  className="gallery-image" src={pic9} alt="Photo" />
                <img  className="gallery-image" src={pic8} alt="Photo" />
                <img  className="gallery-image" src={pic7} alt="Photo" />
                <img  className="gallery-image" src={pic2} alt="Photo" />
                <img  className="gallery-image" src={pic9} alt="Photo" />
                <img  className="gallery-image" src={pic11} alt="Photo" />
                <img  className="gallery-image" src={pic12} alt="Photo" />
                <img  className="gallery-image" src={pic13} alt="Photo" />
                <img  className="gallery-image" src={pic14} alt="Photo" />
                <img  className="gallery-image" src={pic15} alt="Photo" />
                <img  className="gallery-image" src={pic16} alt="Photo" />
                <img  className="gallery-image" src={pic17} alt="Photo" />
                <img  className="gallery-image" src={pic18} alt="Photo" />
                <img  className="gallery-image" src={pic19} alt="Photo" />
                <img  className="gallery-image" src={pic20} alt="Photo" />
                <img  className="gallery-image" src={pic21} alt="Photo" />
                <img  className="gallery-image" src={pic22} alt="Photo" />
                <img  className="gallery-image" src={pic23} alt="Photo" />
                <img  className="gallery-image" src={pic24} alt="Photo" />
                <img  className="gallery-image" src={pic25} alt="Photo" />
                <img  className="gallery-image" src={pic26} alt="Photo" />
                <img  className="gallery-image" src={pic27} alt="Photo" />
                <img  className="gallery-image" src={pic4} alt="Photo" />
                <img  className="gallery-image" src={pic30} alt="Photo" />
                <img  className="gallery-image" src={pic31} alt="Photo" />
                <img  className="gallery-image" src={pic32} alt="Photo" />
                <img  className="gallery-image" src={pic33} alt="Photo" />
                <img  className="gallery-image" src={pic34} alt="Photo" />
                <img  className="gallery-image" src={pic35} alt="Photo" />
                <img  className="gallery-image" src={pic36} alt="Photo" />
                <img  className="gallery-image" src={pic37} alt="Photo" />
                <img  className="gallery-image" src={pic38} alt="Photo" />
                <img  className="gallery-image" src={pic39} alt="Photo" />
                <img  className="gallery-image" src={pic41} alt="Photo" />
                <img  className="gallery-image" src={pic43} alt="Photo" />
                <img  className="gallery-image" src={pic44} alt="Photo" />
                <img  className="gallery-image" src={pic45} alt="Photo" />
                <img  className="gallery-image" src={pic46} alt="Photo" />
                <img  className="gallery-image" src={pic47} alt="Photo" />
                <img  className="gallery-image" src={pic48} alt="Photo" />
                <img  className="gallery-image" src={pic49} alt="Photo" />
                <img  className="gallery-image" src={pic50} alt="Photo" />
                <img  className="gallery-image" src={pic51} alt="Photo" />
                <img  className="gallery-image" src={pic52} alt="Photo" />
                <img  className="gallery-image" src={pic53} alt="Photo" />
          {/* Add more images as necessary */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
