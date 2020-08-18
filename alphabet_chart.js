$('.AlphabetNav a').click(function(evt) {
    evt.preventDefault();
    let $navItem = $(this),
        $items = $('.Item');
    
    $items.show();

    if($navItem.hasClass('active')) {
        $navItem.removeClass('active');
    } else {
        $('.AlphabetNav a').removeClass('active');
        $navItem.addClass('active');

        $.each($items, function(key, item) {
            let $item = $(item),
                $itemName = $item.find('.item-name'),
                $nameArr = $itemName.text().split(' ');

            console.log($nameArr[0].split('')[0].toLowerCase());

            if($nameArr[0].split('')[0].toLowerCase() !== $navItem.text().toLowerCase()) {
                $item.hide();
            }
        });
    }
});