window.onload = function(){
    var AtaP = ""
        ,At5sP = "";
    $("#t5sWd15").blur(function(){
        var taP = (parseInt($("#txWd1").val()) + parseInt($("#txWd2").val()) + parseInt($("#txWd3").val()) + parseInt($("#txWd4").val()) + parseInt($("#txWd5").val()) + parseInt($("#txWd6").val()) + parseInt($("#txWd7").val()) + parseInt($("#txWd8").val()) + parseInt($("#txWd9").val()) + parseInt($("#txWd10").val()) + parseInt($("#txWd11").val()) + parseInt($("#txWd12").val()) + parseInt($("#txWd13").val()) + parseInt($("#txWd14").val()) + parseInt($("#txWd15").val()))/15;
        var t5sP = (parseInt($("#t5sWd1").val()) + parseInt($("#t5sWd2").val()) + parseInt($("#t5sWd3").val()) + parseInt($("#t5sWd4").val()) + parseInt($("#t5sWd5").val()) + parseInt($("#t5sWd6").val()) + parseInt($("#t5sWd7").val()) + parseInt($("#t5sWd8").val()) + parseInt($("#t5sWd9").val()) + parseInt($("#t5sWd10").val()) + parseInt($("#t5sWd11").val()) + parseInt($("#t5sWd12").val()) + parseInt($("#t5sWd13").val()) + parseInt($("#t5sWd14").val()) + parseInt($("#t5sWd15").val()))/15;
        var AtaP = taP
            ,At5sP = t5sP;
        // 显示平均温度 taP
        $("#wdtxa").val(taP);
        // 温度T5测量平均值T5a (℃)
        $("#wdt5").val(t5sP);
        //  温度偏差
        $("#wdpc").val(Math.abs(taP - t5sP));
        if($("#wdpc").val() <= 0.8){
            $("#wc1").text("符合");
            $("#wc1").removeClass("no").addClass("is");
        }else{
            $("#wc1").text("不符合");
            $("#wc1").removeClass("is").addClass("no");
        }
    });
    $("#wdt4").blur(function(){
        // 均匀性
        $("#jyx").val(1);
        // 波动度
        $("#bdd").val(2);
    });
    $("#kzwd").blur(function(){
        // 温控偏差
        var Mwkpc = parseInt($("#kzwd").val()) - At5sP;
        $("#wkpc").val(Math.abs(Mwkpc));
        if($("#wkpc").val() <= 1.5){
            $("#wc4").text("符合");
            $("#wc4").removeClass("no").addClass("is");
        }else{
            $("#wc4").text("不符合");
            $("#wc4").removeClass("is").addClass("no");
        }
    });
    // 超调量
    $("#ctl").blur(function(){
        if($("#ctl").val() <= 2){
            $("#wc5").text("符合");
            $("#wc5").removeClass("no").addClass("is");
        }else{
            $("#wc5").text("不符合");
            $("#wc5").removeClass("is").addClass("no");
        }
    });
    // 空气流速
    $("#kqls").blur(function(){
        if($("#kqls").val() <= 0.35){
            $("#wc6").text("符合");
            $("#wc6").removeClass("no").addClass("is");
        }else{
            $("#wc6").text("不符合");
            $("#wc6").removeClass("is").addClass("no");
        }
    });
    // 噪声（报警激活状态）
    $("#zsbj").blur(function(){
        if($("#zsbj").val() <= 80){
            $("#wc7").text("符合");
            $("#wc7").removeClass("no").addClass("is");
        }else{
            $("#wc7").text("不符合");
            $("#wc7").removeClass("is").addClass("no");
        }
    });
    // 噪声（正常状态）
    $("#zszc").blur(function(){
        if($("#zszc").val() <= 60){
            $("#wc8").text("符合");
            $("#wc8").removeClass("no").addClass("is");
        }else{
            $("#wc8").text("不符合");
            $("#wc8").removeClass("is").addClass("no");
        }
    });
    // 金属部分
    $("#jsbf").blur(function(){
        if($("#jsbf").val() <= 40){
            $("#wc9").text("符合");
            $("#wc9").removeClass("no").addClass("is");
        }else{
            $("#wc9").text("不符合");
            $("#wc9").removeClass("is").addClass("no");
        }
    });
    // 床垫部分
    $("#cdbf").blur(function(){
        if($("#cdbf").val() <= 43){
            $("#wc10").text("符合");
            $("#wc10").removeClass("no").addClass("is");
        }else{
            $("#wc10").text("不符合");
            $("#wc10").removeClass("is").addClass("no");
        }
    });
    // 湿度偏差
    $("#sdcsz").blur(function(){
        var sdpc = parseInt($("#sdszz").val()) - parseInt($("#sdcsz").val());
        if(Math.abs(sdpc) <= 0.1){
            $("#wc11").text("符合");
            $("#wc11").removeClass("no").addClass("is");
        }else{
            $("#wc11").text("不符合");
            $("#wc11").removeClass("is").addClass("no");
        }
    });
}