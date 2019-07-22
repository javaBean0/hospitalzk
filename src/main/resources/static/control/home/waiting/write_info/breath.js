window.onload = function(){
    $("#cqzh13").blur(function(){
        $("#cqzhp11").val((parseInt($("#cqzh11").val())+parseInt($("#cqzh12").val())+parseInt($("#cqzh13").val()))/3);
    });
    $("#cqzc13").blur(function(){
        $("#cqzcp12").val((parseInt($("#cqzc11").val())+parseInt($("#cqzc12").val())+parseInt($("#cqzc13").val()))/3);
        $("#cqz1Swc").val((parseInt($("#cqzhp11").val())-parseInt($("#cqzcp12").val()))/parseInt($("#cqzcp12").val()));
        if(parseInt($("#cqz1Swc"))>-0.15 && parseInt($("#cqz1Swc"))<0.15){
            $("#wc1").text("符合");
            $("#wc1").removeClass("no").addClass("is");
        }else{
            $("#wc1").text("不符合");
            $("#wc1").removeClass("is").addClass("no");
        }
    });

    $("#cqzh23").blur(function(){
        $("#cqzhp21").val((parseInt($("#cqzh21").val())+parseInt($("#cqzh22").val())+parseInt($("#cqzh23").val()))/3);
    });
    $("#cqzc23").blur(function(){
        $("#cqzcp22").val((parseInt($("#cqzc21").val())+parseInt($("#cqzc22").val())+parseInt($("#cqzc23").val()))/3);
        $("#cqz2Swc").val((parseInt($("#cqzhp21").val())-parseInt($("#cqzcp22").val()))/parseInt($("#cqzcp22").val()));
        if(parseInt($("#cqz2Swc"))>-0.15 && parseInt($("#cqz2Swc"))<0.15){
            $("#wc2").text("符合");
            $("#wc2").removeClass("no").addClass("is");
        }else{
            $("#wc2").text("不符合");
            $("#wc2").removeClass("is").addClass("no");
        }
    });
}