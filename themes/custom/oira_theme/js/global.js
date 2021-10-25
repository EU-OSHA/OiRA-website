/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.oira_theme = {
    attach: function (context, settings) {

    }
  };


  /**** Show Hide Results Text in search ***/
if ($('body').find('#edit-search-api-fulltext--2').length>0) {
  let inputVal = $('#edit-search-api-fulltext--2').val();
  let inputValLength = inputVal.length;
  if (inputValLength > 0) {
    $('#edit-search-api-fulltext--2').addClass("has-value");
    $('#edit-search-api-fulltext--2').closest(".content-two-columns").find(".results-for").addClass("show-me");
  } else {
    $('#edit-search-api-fulltext--2').removeClass("has-value");
    $('#edit-search-api-fulltext--2').closest(".content-two-columns").find(".results-for").removeClass("show-me");
    $('#edit-search-api-fulltext--2').closest(".content-two-columns").find(".results-for").addClass("hide-me");
  }
}

// Accesskey for custom elements
  $('#edit-search-api-fulltext').attr('accessKey','4');
  $('#edit-lang-dropdown-select').attr('accessKey','8');


})(jQuery, Drupal);




jQuery(document).ready(function($){
  $('#_biggify').on('click', function() {
    var fontSize = $('html').css('font-size');
    var newFontSize = parseInt(fontSize)+1;
    $('html').css('font-size', newFontSize+'px')
  });

  $('#_smallify').on('click', function() {
    var fontSize = $('html').css('font-size');
    var newFontSize = parseInt(fontSize)-1;
    $('html').css('font-size', newFontSize+'px')
  });

  $('#_reset').on('click', function() {
    $('html').css('font-size', '16px')
  });

  //Menu responsive
  $(function(){
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  });


    windowWidth= jQuery(window).width();

  if(windowWidth <= 992){
    //search header al hacer click
    $("#edit-actions").click(function(){
      $('#views-exposed-form-search-api-search-api-block #edit-search-api-fulltext').stop().show({direction: 'left'}, 500);
      $('#edit-actions .btn-primary').css("pointer-events" , "auto");
    });
  }


    // See more - less
    $('.view-display-id-block_1 .views-col .see-more').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });
    $('.view-promotional-materials.view-display-id-block .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
    });

    $('.view-tools.view-display-id-block_2 .views-col .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });

    $('.view-promotional-resources-search .views-row .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });

    //See more less, Oira Tools
    $('.view-display-id-tools_ws h2').click(function(){
      $(this).toggleClass('expanded');
      $(this).parents('.group-right').find('.expandible').fadeToggle('fast');
    });

  //See more less, search results
  $('.result-item .more-link').click(function(){
    $(this).toggleClass('clicked');
    $(this).parents('.result-item').find('.expand').slideToggle('fast');
  });

    // See more/less, Partners node
    $('.view-country-partner-content .partners-wrapper').wrapInner( "<div class='partners-container' />");
    $('.view-country-partner-content .more-link').click(function(){
      $(this).toggleClass('clicked');
      $(this).parents('.expandible').find('.partners-wrapper').slideToggle('fast');
    });



    // Pager index
    $('.pagination').each(function () {
      let itemLength = $(this).find('.page-item').length;
      let lastItemIndex=itemLength - 1;
      $(this).find('.page-item').eq(lastItemIndex).addClass('last');

      let itemFirst = $(this).find('[title="Go to first page"]').length;
      if(itemFirst>0){
        $(this).find('[title="Go to first page"]').closest('.page-item').addClass('first');
      }

      let itemPrev = $(this).find('[title="Go to previous page"]').length;
      if(itemPrev>0){
        $(this).find('[title="Go to previous page"]').closest('.page-item').addClass('prev');
      }
    });


    /*** Search results text ***/
  $(document).ready(function() {
    $('.results-for').insertBefore('.oira-section .no-container');
  });


  //Sidebar toggle facets
  $('.block-facets h2').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.block-facets').find('.facets-widget-checkbox').slideToggle();
  });

    //Toggle Sidebar
    $('#toggle-sidebar').click(function(){
      $(this).toggleClass('clicked');
      $('#sidebar_first').toggleClass('sidebar-expanded');
    });

    $('.sidebar_first aside .sidebar-close').click(function(){
      $(this).toggleClass('clicked');
      $('#sidebar_first').removeClass('sidebar-expanded');
    });

    /*** Show clear button on active facet ***/
    let searchApiVal = $('#edit-search-api-fulltext--2').val();
    if ( searchApiVal.length>0 || $(".block-facets").hasClass("facet-active") ) {
      $("#edit-search-api-fulltext--2, .block-facets").closest(".section").find('#edit-reset--2').addClass("show-me");
    }

    //Move the summary before the menu (in node 67)
    $('.page-node-67 .field--name-field-summary').insertBefore("#block-oiracommunity");
    $('.page-node-67 .field--name-field-summary').addClass(".jquery--element-moved");


  /*** Menu on mobile ***/
  $('.menu--main .nav-item.menu-item--expanded').click(function(){
    $(this).toggleClass('clicked');
    $(this).find('ul.dropdown-menu').slideToggle('show-me');
  });
  /*** ***/

  /*** Slide Toggle in Partner profile ***/
  $('.partner__address .field__label-widget').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.partner__address').find('.field__content-wrapper').slideToggle();
  });

  $('.partner__socialprofile .field__label-widget').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.partner__socialprofile').find('.item-list').slideToggle();
  });

  /*** Search result toggle text ***/
  $('.result-item .more-link').click(function(){
    $(this).parent('.result-item').find('.body').toggleClass('hideme');
    $(this).parent('.result-item').find('.body-expanded').toggleClass('showme');
  });


  /*** Show/Hide Private ZOne menu ***/
  $('#block-pzhidemenu .hide-link').click(function(){
    $(this).hide();
    $('.show-link').show();
  });

  $('#block-pzhidemenu .show-link').click(function(){
    $(this).hide();
    $('.hide-link').show();
  });

  $('.private-zone.page-title-container .show-menu').click(function(){
    $(this).toggleClass('active');
    $('.hide-menu').removeClass('clicked');
    $(this).parents('.section.oira-section').find('.menu--private-zone').slideToggle();
  });

  /*** Show/Hide popup in oira tool node form ***/
  $('#field_image-media-library-wrapper--description').click(function(){
    $('ul').toggleClass('show-me');
  });

  /*** Move intro text on node 67 ***/
  $('.page-node-67 .field--name-field-summary-article').insertBefore('.menu--oira-community');

  //Move facets numbers filter - MDR-4579
  $('.facets-widget-checkbox .facet-item__count').each(function(){
    $(this).parent().find('.facet-item__value').append($(this));
  });

});




