$(document).ready(function () {

    <!--聚焦事件-->
    $("#exampleInputCode").focus(function () {
        $('#help').text('');
        $(".return").text('');
    });

    <!--点击事件-->
    $('button').click(function () {

        let input = $('#exampleInputCode').val();
        if (input === "") {
            $("#help").text("please input code");
        }

        let choice = $('input[type="radio"]:checked').val();

        function history(data) {
            $('.table tr:first').after('<tr class="table"><td> ' + input + '</td><td>' + data + '</td></tr>');
        }

        function choiceCode(choice) {
            if ($("#barcode").val() !== choice) {
                $.get("/postcode?code=" + input, function (data) {
                    if (data === "") {
                        $("#help").text("error input,please input postcode again");
                    } else {
                        $(".return").text(data);
                        history(data);
                    }
                });
            } else {
                $.get("/barcode?code=" + input, function (data) {
                    if (data === "undefined") {
                        $("#help").text("error input,please input barcode again");
                    } else {
                        $(".return").text(data);
                        history(data);
                    }
                });
            }
        }
        return choiceCode(choice);
    });
});