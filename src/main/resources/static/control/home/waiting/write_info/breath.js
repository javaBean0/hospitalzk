window.onload = function(){
    $("#cqzh13").blur(function(){
        $("#cqzhp11").val((parseInt($("#cqzh11").val())+parseInt($("#cqzh12").val())+parseInt($("#cqzh13").val()))/3);
    });
    $("#cqzc13").blur(function(){
        $("#cqzcp12").val((parseInt($("#cqzc11").val())+parseInt($("#cqzc12").val())+parseInt($("#cqzc13").val()))/3);
        $("#cqz1Swc").val((parseInt($("#cqzhp11").val())-parseInt($("#cqzcp12").val()))/parseInt($("#cqzcp12").val()));
        if(parseInt($("#cqz1Swc"))>-0.15 && parseInt($("#cqz1Swc"))<0.15){
            $("#wc1").text("符合");
        }else{
            $("#wc1").text("不符合");
        }
    });
}