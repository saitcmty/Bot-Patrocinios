function register(newUser) {

	$.ajax({

		url: "/users", 
		method: "POST",
		data: JSON.stringify(newUser),
		dataType: "JSON",
		contentType: "application/json",

		success: function() {
			console.log("A huevo");
		},

		error: function() {
			console.log("Juguito de Chale");
		}
	});
}

function watchForm() {

	$("#sign-in-btn").on("click", function() {
		
		if ($("#sign-in-password").val() != $("#sign-in-password-confirm").val()) {
			alert("Las contraseñas no coinciden");
		}

		else {	
			let newUser = {
				id: "",
				name: $("#sign-in-name").val(),
				email: $("#sign-in-mail").val(),
				password: $("#sign-in-password").val(),
				logged: false,
				admin: false
			};

			register(newUser);
		}
	});

	$("#log-in-btn").on("click", function() {
		
		let logUser = {

		};
	});
}
watchForm();