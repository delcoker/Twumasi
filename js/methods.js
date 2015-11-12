/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var caretaker = "Hi";
var child_name = "Kwabena";
var age = 1;


function always() {
    $(".caretaker_name").text(caretaker);
    $(".childs_name").text("Welcome " + child_name);
    $(".child_age").text(age);
}

function syncAjax(u) {
    prompt("url", u);
    var obj = $.ajax({url: u, async: false});
    return $.parseJSON(obj.responseText);
}

function logout() {
    window.open("index.html", "_self");
}

function first_page_get_info() {
    child_name = $("#child_name").val();
    if ($("#caretaker_name_signup").val() !== '') {
        caretaker = $("#caretaker_name_signup").val();
    }
    child_age = $("#child_age").val();
}

//-------------------------------------

function submit() {
    first_page_get_info();
//    window.open("index.html#thank_you_dialog", "_self");
}

function welcomers() {
    always();
//    window.open("index.html#welcome_after_signup", "_self");

}

function go_to_tit_bits(){
//    window.open("index.html#tit_bits", "_self");
}

function start_lesson(){
    $(".childs_name_hello").text("Hello " + child_name);
//    window.open("index.html#start_lesson", "_self");
}
