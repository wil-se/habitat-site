import "./slider.css";

const cars = [
    "https://memofurniture.com/imager/products/581/prose_loveseat_side_product_banner_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/104/memo_prose_lounge_side_walnut_carousel_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/584/prose_ottomanlounge_3-quarter_product_banner_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/561/prose_free-standing-coffee-table-ash_3-quarter_product_banner_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/563/prose_free-standing-coffee-table-ash_marble-3-quarter_product_banner_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/1843/Penna-Lounge-Walnut-over-Ash-green_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/1844/Penna-Lounge-Clear-over-Walnut_three-quarter_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/1842/Penna-Lounge-Clear-over-Ash_three-quarter_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/1746/Memo_PennaTable-LargeObround_ClearOverWalnut_memo38831_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/2306/Memo_Penna-Cafe-Table-Ash_memo62381a_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/29498/Memo_Maru_7-slat-Bench_FRONT_WCA_pad-bolster-table-partition_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/29483/Memo_Maru_5-slat-Bench_3-QUARTER_WOA_bolsters-facing_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/2179/Memo_Kino-Stool_top_walnut_whitesweep_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/2024/Memo_Kino-Stool_top_burgundy_whitesweep_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/IMAGE-GALLERY-ONLY/2025/Memo_Kino-Stool_top_cream_whitesweep_memo62524b_cln_7132e1cadf96bf8f66689e62fa880cf5.jpg",
    "https://memofurniture.com/imager/products/1284/chroma_lounge_swivel_pink-gray_side_product_banner_7132e1cadf96bf8f66689e62fa880cf5.jpg",
  ];
  

export default function Slider() {
    return (
        <div className="slider">
        <div className="slide-track">
          {cars.map((car, index) => {
            return (
              <div className="slide" key={index}>
                <img src={car} alt="imageforslider"/>
              </div>
            );
          })}
          {cars.map((car, index) => {
            return (
              <div className="slide" key={index}>
                <img src={car} alt="imageforslider" />
              </div>
            );
          })}
        </div>
      </div>
    )
}