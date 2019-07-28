window.onload = function(){
// 潮气量
    // 400
    $("#cqzh13").blur(function(){
        $("#cqzhp11").val((parseInt($("#cqzh11").val())+parseInt($("#cqzh12").val())+parseInt($("#cqzh13").val()))/3);
    });
    $("#cqzc13").blur(function(){
        $("#cqzcp12").val((parseInt($("#cqzc11").val())+parseInt($("#cqzc12").val())+parseInt($("#cqzc13").val()))/3);
        $("#cqz1Swc").val((parseInt($("#cqzhp11").val())-parseInt($("#cqzcp12").val()))/parseInt($("#cqzcp12").val()));
        if($("#cqz1Swc").val() >= 340 && $("#cqz1Swc").val() <= 460){
            $("#wc1").text("符合");
            $("#wc1").removeClass("no").addClass("is");
        }else{
            $("#wc1").text("不符合");
            $("#wc1").removeClass("is").addClass("no");
        }
    });
    // 600
    $("#cqzh23").blur(function(){
        $("#cqzhp21").val((parseInt($("#cqzh21").val())+parseInt($("#cqzh22").val())+parseInt($("#cqzh23").val()))/3);
    });
    $("#cqzc23").blur(function(){
        $("#cqzcp22").val((parseInt($("#cqzc21").val())+parseInt($("#cqzc22").val())+parseInt($("#cqzc23").val()))/3);
        $("#cqz2Swc").val((parseInt($("#cqzhp21").val())-parseInt($("#cqzcp22").val()))/parseInt($("#cqzcp22").val()));
        if($("#cqz2Swc").val() >= 510 && $("#cqz2Swc").val() <= 690){
            $("#wc2").text("符合");
            $("#wc2").removeClass("no").addClass("is");
        }else{
            $("#wc2").text("不符合");
            $("#wc2").removeClass("is").addClass("no");
        }
    });
    // 800 
    $("#cqzh33").blur(function(){
        $("#cqzhp31").val((parseInt($("#cqzh31").val())+parseInt($("#cqzh32").val())+parseInt($("#cqzh33").val()))/3);
    });
    $("#cqzc33").blur(function(){
        $("#cqzcp32").val((parseInt($("#cqzc31").val())+parseInt($("#cqzc32").val())+parseInt($("#cqzc33").val()))/3);
        $("#cqz3Swc").val((parseInt($("#cqzhp31").val())-parseInt($("#cqzcp32").val()))/parseInt($("#cqzcp32").val()));
        if($("#cqz3Swc").val() >= 680 && $("#cqz3Swc").val() <= 920){
            $("#wc3").text("符合");
            $("#wc3").removeClass("no").addClass("is");
        }else{
            $("#wc3").text("不符合");
            $("#wc3").removeClass("is").addClass("no");
        }
    });
// 强制通气频率
    // 10
    $("#qztqh13").blur(function(){
        $("#qztqhp11").val((parseInt($("#qztqh11").val())+parseInt($("#qztqh12").val())+parseInt($("#qztqh13").val()))/3);
    });
    $("#qztqc13").blur(function(){
        $("#qztqcp12").val((parseInt($("#qztqc11").val())+parseInt($("#qztqc12").val())+parseInt($("#qztqc13").val()))/3);
        $("#qztq1Swc").val((parseInt($("#qztqhp11").val())-parseInt($("#qztqcp12").val()))/parseInt($("#qztqcp12").val()));
        if($("#qztq1Swc").val() >= 9 && $("#qztq1Swc").val() <= 11){
            $("#wc4").text("符合");
            $("#wc4").removeClass("no").addClass("is");
        }else{
            $("#wc4").text("不符合");
            $("#wc4").removeClass("is").addClass("no");
        }
    });
    // 25
    $("#qztqh23").blur(function(){
        $("#qztqhp21").val((parseInt($("#qztqh21").val())+parseInt($("#qztqh22").val())+parseInt($("#qztqh23").val()))/3);
    });
    $("#qztqc23").blur(function(){
        $("#qztqcp22").val((parseInt($("#qztqc21").val())+parseInt($("#qztqc22").val())+parseInt($("#qztqc23").val()))/3);
        $("#qztq2Swc").val((parseInt($("#qztqhp21").val())-parseInt($("#qztqcp22").val()))/parseInt($("#qztqcp22").val()));
        if($("#qztq2Swc").val() >= 22.5 && $("#qztq2Swc").val() <= 27.5){
            $("#wc5").text("符合");
            $("#wc5").removeClass("no").addClass("is");
        }else{
            $("#wc5").text("不符合");
            $("#wc5").removeClass("is").addClass("no");
        }
    });
    // 40
    $("#qztqh33").blur(function(){
        $("#qztqhp31").val((parseInt($("#qztqh31").val())+parseInt($("#qztqh32").val())+parseInt($("#qztqh33").val()))/3);
    });
    $("#qztqc33").blur(function(){
        $("#qztqcp32").val((parseInt($("#qztqc31").val())+parseInt($("#qztqc32").val())+parseInt($("#qztqc33").val()))/3);
        $("#qztq3Swc").val((parseInt($("#qztqhp31").val())-parseInt($("#qztqcp32").val()))/parseInt($("#qztqcp32").val()));
        if($("#qztq3Swc").val() >= 36 && $("#qztq3Swc").val() <= 44){
            $("#wc6").text("符合");
            $("#wc6").removeClass("no").addClass("is");
        }else{
            $("#wc6").text("不符合"); 
            $("#wc6").removeClass("is").addClass("no");
        }
    });
// 吸入氧浓度
    // 21
    $("#xryh13").blur(function(){
        $("#xryhp11").val((parseInt($("#xryh11").val())+parseInt($("#xryh12").val())+parseInt($("#xryh13").val()))/3);
    });
    $("#xryc13").blur(function(){
        $("#xrycp12").val((parseInt($("#xryc11").val())+parseInt($("#xryc12").val())+parseInt($("#xryc13").val()))/3);
        $("#xry1Swc").val(parseInt($("#xryhp11").val())-parseInt($("#xrycp12").val()));
        if($("#xry1Swc").val() >= 19.95 && $("#xry1Swc").val() <= 22.05){
            $("#wc7").text("符合");
            $("#wc7").removeClass("no").addClass("is");
        }else{
            $("#wc7").text("不符合"); 
            $("#wc7").removeClass("is").addClass("no");
        }
    });
    // 60
    $("#xryh23").blur(function(){
        $("#xryhp21").val((parseInt($("#xryh21").val())+parseInt($("#xryh22").val())+parseInt($("#xryh23").val()))/3);
    });
    $("#xryc23").blur(function(){
        $("#xrycp22").val((parseInt($("#xryc21").val())+parseInt($("#xryc22").val())+parseInt($("#xryc23").val()))/3);
        $("#xry2Swc").val(parseInt($("#xryhp21").val())-parseInt($("#xrycp22").val()));
        if($("#xry2Swc").val() >= 57 && $("#xry2Swc").val() <= 63){
            $("#wc8").text("符合");
            $("#wc8").removeClass("no").addClass("is");
        }else{
            $("#wc8").text("不符合"); 
            $("#wc8").removeClass("is").addClass("no");
        }
    });
    // 100
    $("#xryh33").blur(function(){
        $("#xryhp31").val((parseInt($("#xryh31").val())+parseInt($("#xryh32").val())+parseInt($("#xryh33").val()))/3);
    });
    $("#xryc33").blur(function(){
        $("#xrycp32").val((parseInt($("#xryc31").val())+parseInt($("#xryc32").val())+parseInt($("#xryc33").val()))/3);
        $("#xry3Swc").val(parseInt($("#xryhp31").val())-parseInt($("#xrycp32").val()));
        if($("#xry3Swc").val() >= 95 && $("#xry3Swc").val() <= 105){
            $("#wc9").text("符合");
            $("#wc9").removeClass("no").addClass("is");
        }else{
            $("#wc9").text("不符合"); 
            $("#wc9").removeClass("is").addClass("no");
        }
    });
// 吸气峰值压力
    // 10
    $("#xqfh13").blur(function(){
        $("#xqfhp11").val((parseInt($("#xqfh11").val())+parseInt($("#xqfh12").val())+parseInt($("#xqfh13").val()))/3);
    });
    $("#xqfc13").blur(function(){
        $("#xqfcp12").val((parseInt($("#xqfc11").val())+parseInt($("#xqfc12").val())+parseInt($("#xqfc13").val()))/3);
        $("#xqf1Swc").val(parseInt($("#xqfhp11").val())-parseInt($("#xqfcp12").val()));
        if($("#xqf1Swc").val() >= 7 && $("#xqf1Swc").val() <= 13){
            $("#wc10").text("符合");
            $("#wc10").removeClass("no").addClass("is");
        }else{
            $("#wc10").text("不符合"); 
            $("#wc10").removeClass("is").addClass("no");
        }
    });
    // 20
    $("#xqfh23").blur(function(){
        $("#xqfhp21").val((parseInt($("#xqfh21").val())+parseInt($("#xqfh22").val())+parseInt($("#xqfh23").val()))/3);
    });
    $("#xqfc23").blur(function(){
        $("#xqfcp22").val((parseInt($("#xqfc21").val())+parseInt($("#xqfc22").val())+parseInt($("#xqfc23").val()))/3);
        $("#xqf2Swc").val(parseInt($("#xqfhp21").val())-parseInt($("#xqfcp22").val()));
        if($("#xqf2Swc").val() >= 17 && $("#xqf2Swc").val() <= 23){
            $("#wc11").text("符合");
            $("#wc11").removeClass("no").addClass("is");
        }else{
            $("#wc11").text("不符合"); 
            $("#wc11").removeClass("is").addClass("no");
        }
    });
    // 30
    $("#xqfh33").blur(function(){
        $("#xqfhp31").val((parseInt($("#xqfh31").val())+parseInt($("#xqfh32").val())+parseInt($("#xqfh33").val()))/3);
    });
    $("#xqfc33").blur(function(){
        $("#xqfcp32").val((parseInt($("#xqfc31").val())+parseInt($("#xqfc32").val())+parseInt($("#xqfc33").val()))/3);
        $("#xqf3Swc").val(parseInt($("#xqfhp31").val())-parseInt($("#xqfcp32").val()));
        if($("#xqf3Swc").val() >= 27 && $("#xqf3Swc").val() <= 33){
            $("#wc12").text("符合");
            $("#wc12").removeClass("no").addClass("is");
        }else{
            $("#wc12").text("不符合"); 
            $("#wc12").removeClass("is").addClass("no");
        }
    });
// 呼气末正压
    // 2
    $("#hqmh13").blur(function(){
        $("#hqmhp11").val((parseInt($("#hqmh12").val())+parseInt($("#hqmh12").val())+parseInt($("#hqmh13").val()))/3);
    });
    $("#hqmc13").blur(function(){
        $("#hqmcp12").val((parseInt($("#hqmc11").val())+parseInt($("#hqmc12").val())+parseInt($("#hqmc13").val()))/3);
        $("#hqm1Swc").val(parseInt($("#hqmhp11").val())-parseInt($("#hqmcp12").val()));
        if($("#hqm1Swc").val() >= 0 && $("#hqm1Swc").val() <= 4){
            $("#wc13").text("符合");
            $("#wc13").removeClass("no").addClass("is");
        }else{
            $("#wc13").text("不符合"); 
            $("#wc13").removeClass("is").addClass("no");
        }
    });
    // 5
    $("#hqmh23").blur(function(){
        $("#hqmhp21").val((parseInt($("#hqmh21").val())+parseInt($("#hqmh22").val())+parseInt($("#hqmh23").val()))/3);
    });
    $("#hqmc23").blur(function(){
        $("#hqmcp22").val((parseInt($("#hqmc21").val())+parseInt($("#hqmc22").val())+parseInt($("#hqmc23").val()))/3);
        $("#hqm2Swc").val(parseInt($("#hqmhp21").val())-parseInt($("#hqmcp22").val()));
        if($("#hqm2Swc").val() >= 3 && $("#hqm2Swc").val() <= 7){
            $("#wc14").text("符合");
            $("#wc14").removeClass("no").addClass("is");
        }else{
            $("#wc14").text("不符合"); 
            $("#wc14").removeClass("is").addClass("no");
        }
    });
    // 15
    $("#hqmh33").blur(function(){
        $("#hqmhp31").val((parseInt($("#hqmh31").val())+parseInt($("#hqmh32").val())+parseInt($("#hqmh33").val()))/3);
    });
    $("#hqmc33").blur(function(){
        $("#hqmcp32").val((parseInt($("#hqmc31").val())+parseInt($("#hqmc32").val())+parseInt($("#hqmc33").val()))/3);
        $("#hqm3Swc").val(parseInt($("#hqmhp31").val())-parseInt($("#hqmcp32").val()));
        if($("#hqm3Swc").val() >= 13 && $("#hqm3Swc").val() <= 17){
            $("#wc15").text("符合");
            $("#wc15").removeClass("no").addClass("is");
        }else{
            $("#wc15").text("不符合"); 
            $("#wc15").removeClass("is").addClass("no");
        }
    });
}