/*
 var links = $('a.lesson-index__download-link');
 var linksArray = new Array();
 for (var i = 0; i < links.length; i++) {
 linksArray.push($(links[i]).attr('href'));
 }
 console.log(linksArray.join(','));
 */
$(document).ready(function () {
    //console.log('ready');
    //var link = $('video source').attr('src');
    //console.log('link', link);

    //get video source
    var videoSrc = $('video source').attr('src');

    //get courseLinks, add the current to the end of the array and save them into sessionStorage
    var courseLinks = JSON.parse(sessionStorage.getItem('courseLinks'));
    if (courseLinks === null) {
        courseLinks = new Array();
    }
    courseLinks.push(videoSrc);
    sessionStorage.setItem('courseLinks', JSON.stringify(courseLinks));

    //follow next video anchor
    if($('.lesson-video__next-link.lesson-video__navigation-link').length > 0){
        $('.lesson-video__next-link.lesson-video__navigation-link')[0].click('click');
    } else {
        console.log(courseLinks.join(', '));
        //change to copy to clipboard?
    }
}, false);