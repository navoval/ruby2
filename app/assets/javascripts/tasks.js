//$(document).ready(function(){
//
//    $(document).bind('ajaxError', 'form#new_person', function(event, jqxhr, settings, exception){
//
//        // note: jqxhr.responseJSON undefined, parsing responseText instead
//        $(event.data).render_form_errors( $.parseJSON(jqxhr.responseText) );
//
//    });
//
//});
//
//(function($) {
//
//    $.fn.modal_success = function(){
//        // close modal
//        this.modal('hide');
//
//        // clear form input elements
//        this.find('form input[type="text"]').val('');
//
//        // clear error state
//        this.clear_previous_errors();
//    };
//
//    $.fn.render_form_errors = function(errors){
//
//        $form = this;
//        this.clear_previous_errors();
//        model = this.data('model');
//
//        // show error messages in input form-group help-block
//        $.each(errors, function(field, messages){
//            $input = $('input[name="' + model + '[' + field + ']"]');
//            $input.closest('.form-group').addClass('has-error').find('.help-block').html( messages.join(' & ') );
//        });
//
//    };
//
//    $.fn.clear_previous_errors = function(){
//        $('.form-group.has-error', this).each(function(){
//            $('.help-block', $(this)).html('');
//            $(this).removeClass('has-error');
//        });
//    }
//
//}(jQuery));

//$("#myForm").submit(function(){
//
//    var formData = new FormData($(this)[0]);
//    console.log(formData);
//    $.ajax({
//        url: window.location.pathname,
//        type: 'POST',
//        data: formData,
//        async: false,
//        success: function (data) {
//            alert(data)
//        },
//        cache: false,
//        contentType: false,
//        processData: false
//    });
//    return false;
//});

//
//$('#uploadForm input').change(function(){
//    $(this).parent().ajaxSubmit({
//        beforeSubmit: function(a,f,o) {
//            o.dataType = 'json';
//        },
//        complete: function(XMLHttpRequest, textStatus) {
//            // XMLHttpRequest.responseText will contain the URL of the uploaded image.
//            // Put it in an image element you create, or do with it what you will.
//            // For example, if you have an image elemtn with id "my_image", then
//            //  $('#my_image').attr('src', XMLHttpRequest.responseText);
//            // Will set that image tag to display the uploaded image.
//        console.log(this);
//        }
//    });
//});

//(function($) {
//
//    $.fn.modal_success = function(){
//        var form = document.getElementById('myForm');
//        var fileSelect = document.getElementById('file-select');
//        var uploadButton = document.getElementById('upload-button');
//        console.log(form);
//        form.onsubmit = function(event) {
//            event.preventDefault();
//
//            // Update button text.
//            uploadButton.innerHTML = 'Uploading...';
//
//            // Get the selected files from the input.
//            var files = fileSelect.files;
//            // Create a new FormData object.
//            var formData = new FormData();
//            // Loop through each of the selected files.
//            for (var i = 0; i < files.length; i++) {
//                var file = files[i];
//
//                // Check the file type.
//
//                // Add the file to the request.
//                formData.append('@task.photo, file, file.name');
//
//            }
//            // Set up the request.
//            var xhr = new XMLHttpRequest();
//            // Set up a handler for when the request finishes.
//            xhr.onload = function () {
//                if (xhr.status === 200) {
//                    // File(s) uploaded.
//                    uploadButton.innerHTML = 'Upload';
//                } else {
//                    alert('An error occurred!');
//                }
//            };
//            // Send the Data.
//            xhr.send(formData);
//            console.log('xhr');
//        }
//    };
//}(jQuery));