
$('a[href="#"]').click(function(e) {
  e.preventDefault();
});


// nav megamenu
$('#gnb .sub-menu').mouseover(function() { 
  var DepthTarget = $(this).attr('data-target'); 
  var Depth = $("li[id=" + DepthTarget + "]");
  Depth.addClass('current-page');
}).mouseout(function(){
  var DepthTarget = $(this).attr('data-target'); 
  var Depth = $("li[id=" + DepthTarget + "]");
  Depth.removeClass('current-page');
});

// select placeholder
$('.select--st').change(function(){
  $(this).css('color','#000')
})


// .select-readonly
$(".select-readonly").focus(function(){
  var pCellDefault = $(this)[0].selectedIndex;
  $(this)[0].initialSelect =  pCellDefault
}).change(function(){
  var pCellDefault = 	$(this)[0].initialSelect;
  $(this)[0].selectedIndex  = pCellDefault;
});


// select div
// https://codepen.io/wallaceerick/pen/ctsCz
$('.select-div').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;
  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select-div-wrap"></div>');
  $this.after('<div class="select-styled"></div>');
  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);
  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }
  var $listItems = $list.children('li');
  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });
  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });
  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });
});



// all check 
$(".check_all").on("click", function() {
  var _this = $(this);
  if (_this.prop("checked") == false) {
    _this.closest(".check-all-group").find("input[type='checkbox']").prop("checked",false);
    _this.closest(".tbl-type--list").find("tr").removeClass("tr-checked-bg");//bg color
  }else {
    _this.closest(".check-all-group").find("input[type='checkbox']").prop("checked",true);
    _this.closest(".tbl-type--list").find("tr").addClass("tr-checked-bg");//bg color
  }
})
$(".check_item").on("click", function() {
  var _this = $(this);
  var _leng = _this.closest(".check-all-group").find(".check_item").length;
  var _lengChk = _this.closest(".check-all-group").find("input:checked").length;
  
  if (_this.prop("checked") == false) {
    _this.closest(".check-all-group").find(".check_all").prop("checked",false);
  }else {
    if (_leng == _lengChk) {
      _this.closest(".check-all-group").find(".check_all").prop("checked",true);
    }
  }
});
$(".tbl-type--list .check_item").on("click", function() {
  $(this).closest("tr").toggleClass("tr-checked-bg");//bg color
});



// input file - multiple
$(".input_file_mti").change(function(){
  fileList = $(this)[0].files;
  fileListTag = '';
  for(i = 0; i < fileList.length; i++){
    fileListTag += "<li><a class='a-mti-txt'>"+fileList[i].name+"</a><button class='bt-file-del'>삭제</button></li>";
  }
  var fL = $(this).closest('.file-multiple-wrap').find('.file-list-mti')
  fL.html(fileListTag);
});

// input file - file name
var fileTarget = $('.js_file_wrap').find('.original_fileinput');
fileTarget.on('change', function () {
  if (window.FileReader) {
    var filename = $(this)[0].files[0].name;
  }
  $(this).siblings('.fake_fileinput').val(filename);
});

// input file - preview img
var imgTarget = $('.file-preview-wrap').find('.original_fileinput');
imgTarget.on('change', function () {
  var parent = $(this).closest('.file-preview-wrap');
  parent.children('.file-preview-item').remove();

  if (window.FileReader) {
    if (!$(this)[0].files[0].type.match(/image\//)) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      var src = e.target.result;
      parent.find('.file-preview-item').html('<figure class="file-preview-figure"><img src="' + src + '"/></figure>');
    }
    reader.readAsDataURL($(this)[0].files[0]);
  }
});


// datalist for chrome
$('.datalist-input').attr('autocomplete','off');



// popup sample
function popOpen(_this) {
  var popis = $(_this);
  popis.show();
};
function popClose (_this) {
  var popis = $(_this);
  popis.parents('.popup-wrap').hide();
};


// html include (header footer) 
// http-server 실행
// https://kyung-a.tistory.com/18 
window.addEventListener('load', function() {
  var allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           el.outerHTML = this.responseText;
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });
});


// 공지사항 2022-03-16
$(".tbl-type--list tr.tr-notice").last().addClass("tr-border-red");

$('.input-search-wrap > input').focus(function(){
  $(this).closest('.input-search-wrap').addClass('focus-border');
}).blur(function(){
    $(this).closest('.input-search-wrap').removeClass('focus-border');
  }
);