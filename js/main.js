/**********
  Main timeline template from 
  https://codyhouse.co/gem/vertical-timeline/
***********/
jQuery(document).ready(function($){
  /* Load image files - nice way but not working on GitHub*/
  // var folder = "images/";
  // $.ajax({
  //     url : folder,
  //     success: function (data) {
  //         $(data).find("a").attr("href", function (i, val) {
  //             if( val.match(/\.(jpe?g|JPE?G|png|gif)$/) ) {
  //               $("#img-repo").append("<div class='item' id='image-" 
  //                 + parseInt(val.match(/\d+/)[0]) + "'><img class='thumbnail img-responsive' src='" 
  //                 + folder + val + "'></div>");
  //             }
  //           });
  //       }
  //   });

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

/**** Carousel logic from Mikhail Niedre via CodepPen ****/
	/* activate the carousel */
   $("#modal-carousel").carousel({interval:false});

   /* change modal title when slide changes */
   $("#modal-carousel").on("slid.bs.carousel", function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
   });

   /* when clicking a thumbnail */
   $(".thumbnail").click(function(){
    /* Load images - hacky way */
    var repoId = parseInt(this.id.match(/\d+/)[0]);
    var numImages = 0;
    var folderExt = "";
    switch (repoId) {
      case 1: 
        numImages = 40;
        folderExt = "October23";
        break;
      case 2:
        numImages = 2;
        folderExt = "October24";
        break;
      case 3: 
        numImages = 6
        folderExt = "October25";
        break;
      case 4:
        numImages = 19;
        folderExt = "October26";
        break;
      case 5:
        numImages = 13;
        folderExt = "October27";
        break;
      case 6: 
        numImages = 34;
        folderExt = "October28";
        break;
      case 7:
        numImages = 27;
        folderExt = "October29";
        break;
      case 8:
        numImages = 4;
        folderExt = "October30";
        break;
      default:
        break;
    }
    for (var i = 1; i <= numImages; i++) { 
      var imgNum = (i < 10 ? "0" + i : "" + i);
      console.log(imgNum); 
      $("#img-repo").append("<div class='item' id='image-" 
        + repoId + "'><img class='thumbnail img-responsive' src='images/" + folderExt + "/image-" 
        + repoId + "-" + imgNum + ".JPG'></div>");
    }


    var content = $(".carousel-inner");
    var title = $(".modal-title");
  
    content.empty();  
    title.empty();
  
  	var id = this.id;  
     var repo = $("#img-repo .item");
     var repoCopy = repo.filter("#" + id).clone();
     var active = repoCopy.first();
  
    active.addClass("active");
    title.html(active.find("img").attr("title"));
  	content.append(repoCopy);

    // show the modal
  	$("#modal-gallery").modal("show");
  });

});