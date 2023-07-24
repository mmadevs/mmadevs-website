import ImageSlider from "../atoms/ImageSlider";

export const Slide = () => {
  const slides = [
    { url: "/assets/img/image-1.png", title: "", alt: "" },
    { url: "/assets/img/image-2.jpg", title: "", alt: "" },
    { url: "/assets/img/image-3.jpg", title: "", alt: "" },
    { url: "/assets/img/image-4.jpg", title: "", alt: "" },
  ];

  //   const containerStyles = {
  //     width: "500px",
  //     height: "200px",
  //     margin: "0 auto",
  //   };

  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div className="w-96 h-52 m-auto">
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};
