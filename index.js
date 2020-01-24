function myProjects () {
    $(".myprojects").on("click", function(e) {
    
    e.preventDefault();

    $("html, body").animate({scrollTop: "1300px"});
    })
};


$(myProjects);