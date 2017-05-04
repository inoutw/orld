/**
 * Created by qinai on 3/2/17.
 */
$(document).ready(function () {
    $('body').on('click', 'span.glyphicon-remove-circle', function(){
        $(this).parent('span').remove();
    });
    var popoverEl = $('.popover'), targetEl = '', targetNext='';

    $('.addRes').click(function(event){
         targetEl = $(event.target);
         targetNext = targetEl.next();
         var baseOffset = targetEl.offset(),
             popoverTop = baseOffset.top + 26,
             popoverLeft = baseOffset.left - 20;

        popoverEl.css({top: popoverTop, left: popoverLeft});
        popoverEl.show();

    })
    $('#addResBtn').click(function(){
        var resInput = $('#resource').val().trim();
        if(resInput){
            var resArr = resInput.split(','),
                newNode = '<span>{} <span class="glyphicon glyphicon-remove-circle"></span></span>';
            for(var i=0; i< resArr.length; i++){
                if(resArr[i].trim()){
                    var newRes = newNode.replace(/\{\}/, resArr[i]);
                    targetNext.append(newRes);
                }
            }
        }
        clearPopover();
    })
    $('.popover_close').click(clearPopover);
    function clearPopover(){
        popoverEl.hide();
        $('#resource').val('');
    }

    $('.vertical_line').height($('.agents_panel').height());
    $(window).resize(function() {
        if($(window).width()>768){
            var curHeight = $('.agents_panel').height();
            $('.vertical_line').height(curHeight);
        }
    });


})


