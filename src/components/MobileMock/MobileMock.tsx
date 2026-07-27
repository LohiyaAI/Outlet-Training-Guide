import "./MobileMock.css";

interface MobileMockProps {
  image: string;
  autoScroll?: boolean
}

export default function MobileMock({ 
  image,
  autoScroll,
 }: MobileMockProps) {
  return (
    <div className="phone">

      <div className="camera"></div>

      <div className="screen">

        <img
          src={image}
          alt="Training Screen"
          className={
            autoScroll
            ?"screen-image scroll-image"
            :"screen-image"
          }
        />

      </div>

    </div>
  );
}