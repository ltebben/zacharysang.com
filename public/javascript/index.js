var navColors = ['#F36F03','darkblue','green', 'teal','crimson','purple'];
var mainColors = ['#F36F03','lightblue','lightgreen','#bef4f1','#ffe0e9','plum'];

$(document).ready(function(){
    //listen for mouseover on sectionContainer to trigger color change
    $('.sectionContainer').on('mouseover touchstart hover scrollstart scrollend',function(ev){

        //get id of current element
        var currSection = parseInt($(ev.target).closest('.sectionContainer').attr('itemNum'));


        //get color of current element
        var mainCol = mainColors[currSection];
        var navCol = navColors[currSection];

        $('.gridContainer').css({"transition":"0.3s","background-color":mainCol});
        $('.navbar').css({"transition":"0.3s","background-color":navCol});

    });

    //listen for mouseover banner to reset color
    $('.banner').on('mouseover', function(ev){
        $('.gridContainer').css({"transition":"0.3s","background-color":'white'});
        $('.navbar').css({"transition":"0.3s","background-color":'#F36F03'});
    })

    //listen for scroll and check position of top of screen, replace the mouseover stuff

    //listen for click on the h1 elements
    $('.sectionHeadings h2').on('click',function(ev){
        
        
        $('.sectionContent .entry').each(function(){$(this).animate({opacity: 0},100)});

        $(`.sectionContent .${$(ev.target).attr('class')}`).animate({opacity: 1},100);

        //highlight the heading
        $('.sectionHeadings h2').each(function(){$(this).css({'background-color':'inherit','color':'inherit','transition':'0.2s'})});
        $(ev.target).css({'background-color': 'teal', 'color': 'white', 'transition': '0.2s'});


    });


    //code for rotating tagline. can probably be refactored to remove bad global vars
    slogPos = 0;
    slogans = $('.tagline');
    window.setInterval(rotateSlogan, 5000);

});


function resetBaseColor(col){

}

function rotateSlogan(){
    $(slogans[slogPos]).hide();
    $(slogans[(slogPos+1) % slogans.length]).show();
    
    slogPos = (++slogPos) % slogans.length;



}