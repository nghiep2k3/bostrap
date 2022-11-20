$(document).ready(function(){
    $('.Member').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        // infinite: true,
        // arrows: true,
        // draggable:false,
        prevArrow:
        `<button type='button' class='slick-prev pull-left'>
            <img src="https://cdn-icons-png.flaticon.com/512/507/507257.png"></img>
        </button>`,

        nextArrow:
        `<button type='button' class='slick-next pull-right'>
        <img src="https://cdn-icons-png.flaticon.com/512/271/271226.png"></img>
        </button>`,

        responsive: [
            // {
            //   breakpoint: 1025,
            //   settings: {
            //     slidesToShow: 3,
            //   }
            // },

            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                }
            },
        ]
      }); 
  });

