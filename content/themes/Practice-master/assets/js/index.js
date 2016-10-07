/*
===============================================================================
  Subbscribe
===============================================================================
*/
$('body').subbscribe({
    list: "MailChimp",
    url: "//1bytebeta.us9.list-manage.com/subscribe/post?u=1c261e60d8259c0c636801494&id=7fa99bf359",
    name: "<a href='https://twitter.com/shlominissan' target='_blank'>@shlominissan</a>",
    thumbnail: "https://s3-ap-southeast-2.amazonaws.com/subbscribe/img/shlomi.jpg",
    color: "#F2545B",
    delay: 3,
});
/*
===============================================================================
  Infinity Scroll - YEAH!
===============================================================================
*/
    $('.index-wrapper').infinitescroll({
        navSelector: "#next:last",
        nextSelector: "a#next:last",
        itemSelector: "#timeline",
        dataType: 'html',
        maxPage: 3,
    });
/*
===============================================================================
  Disqus 
===============================================================================
*/
(function () { // DON'T EDIT BELOW THIS LINE
    var d = document,
        s = d.createElement('script');

    s.src = '//tilligettherecom.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
