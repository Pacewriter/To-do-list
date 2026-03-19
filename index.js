$(".addTask").click(function(){
    const task = $("#new-task").val();

    var badButtonHtml = $('<button/>', {
            text: 'unfinished',
            class: 'badBtn'
    })[0].outerHTML;

    var goodButtonHtml = $('<button/>', {
            text: 'finished',
            class: 'goodBtn'
    })[0].outerHTML;

    var newItem = '<li>' + goodButtonHtml + ' ' + task + ' ' + badButtonHtml + '</li>';

        
    $('#tasks').append(newItem);

    $("#new-task").val("");
});

$("#tasks").on("click", ".goodBtn", function(e){
    
    e.stopPropagation();
    
    var chosenTask = $(this).parent();

    if (chosenTask.hasClass("bad")){
        return;
    }
    chosenTask.addClass('completed');

    chosenTask.find("button").prop("disabled", true);
    
});

$("#tasks").on("click", ".badBtn", function(e){

    e.stopPropagation();

    var chosenTask = $(this).parent();

    if (chosenTask.hasClass("completed")){
        return;
    }

    chosenTask.addClass('bad');

    chosenTask.find("button").prop("disabled", true);

});

$(".btn").click(function(){
    $("#tasks").empty();
});
