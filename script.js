const app = {

  initialize: () => {
    $('.tri').click(e => {
      $(e.currentTarget).toggleClass('transform')
    });

    $('.ball').dblclick(e => {
      // $(e.currentTarget).toggleClass('animated')
      $(e.currentTarget).toggleClass('bounce');
    });

    $('.stopBouncing').click(function () {
      app.stopBouncing();
    });
  },

  stopBouncing: () => {
    $('.ball').removeClass('bounce');
  },
}
