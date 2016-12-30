$(document).ready(function() {
        $('.filter-categories-arrow').click(function(){
            $('.filter-categories-select').addClass('filter-categories-select--show');
            $('.filter-categories-select li').click(function(){
               $('.filter-categories-select').removeClass('filter-categories-select--show'); 
            });
        });
    
    
        $('.search-btn').on('click', function (e) {
            e.preventDefault();
            $('.search-input').slideToggle('slow')
        })
       
        $('.close-modal').on('click', function (e) {
            e.preventDefault();
            $('.fancybox-wrap').hide();
            $('.fancybox-overlay').hide()
            
        })
    
        $(".fancybox").fancybox();
    
    
        $('#filter-country').on('click', function (e) {
            e.preventDefault();
            $('#filter-country-open').slideToggle('slow')
        })
        $('#filter-mass-market').on('click', function (e) {
            e.preventDefault();
            $('#filter-mass-market-open').slideToggle('slow')
        })
        $('#filter-middle-market').on('click', function (e) {
            e.preventDefault();
            $('#filter-middle-market-open').slideToggle('slow')
        })
        $('#filter-lux-market').on('click', function (e) {
            e.preventDefault();
            $('#filter-lux-market-open').slideToggle('slow')
        })
        $('#filter-organic').on('click', function (e) {
            e.preventDefault();
            $('#filter-organic-open').slideToggle('slow')
        })
        $('#filter-med').on('click', function (e) {
            e.preventDefault();
            $('#filter-med-open').slideToggle('slow')
        })
        $('#filter-pro').on('click', function (e) {
            e.preventDefault();
            $('#filter-pro-open').slideToggle('slow')
        })
        $('#filter-season').on('click', function (e) {
            e.preventDefault();
            $('#filter-season-open').slideToggle('slow')
        })
        $('#filter-current-sale').on('click', function (e) {
            e.preventDefault();
            $('#filter-currenr-sale-open').slideToggle('slow')
        })
         $('#filter-finished-sale').on('click', function (e) {
            e.preventDefault();
            $('#filter-finished-sale-open').slideToggle('slow')
        })
        $('#filter-brand').on('click', function (e) {
            e.preventDefault();
            $('#filter-brand-open').slideToggle('slow')
        })
        $('#filter-year').on('click', function (e) {
            e.preventDefault();
            $('#filter-year-open').slideToggle('slow')
        })
        
        $('.product-slider').bxSlider({
            pagerCustom: '#bx-pager'
        });
        
});


