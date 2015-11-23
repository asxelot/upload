$('#uploadForm').on('submit', function() {
	$.ajax({
		url: '/upload',
		type: 'POST',
		data: new FormData(this),
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false
	}).done(function(data) {
		console.log(data)
	})


  return false
})