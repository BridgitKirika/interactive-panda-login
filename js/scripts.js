alert("Try to enter username or password to see the panda reacting to your actions.");
$(document).ready(function(){
			$(":text").focus(function(){
				$(".handl").css({
					transform: 'rotate(0deg)',
                    left: '30px',
                    bottom: '20px',
                    height: '50px',
				});
				$(".handr").css({
					transform: 'rotate(0deg)',
					left: '90px',
                    bottom: '70px',
                    height: '50px',

				});
				$(".eyeball1").css({
					top: '20px',
					left: '13px'
				});
				$(".eyeball2").css({
					top: '20px',
					left: '8px'
				});
			});
			$(":password").focus(function(){
				$(".eyeball1").css({
					top: '10px',
					left: '10px'
				});
				$(".eyeball2").css({
					top: '10px',
					left: '10px'
				});
				$(".handl").css({
					transform: 'rotate(-150deg)',
                    left: '20px',
                    bottom: '110px',
                    height: '65px',
					
				});
				$(".handr").css({
					transform: 'rotate(150deg)',
                    left: '80px',
                    bottom: '175px',
                    height: '65px',

					
				});
			});
		});