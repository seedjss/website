// Get a reference to the database service
  var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var mydb = firebase.database();
  var ref=mydb.ref('posts').on('value',read_every,read_every_error);
  function post_new_query()
  {
    //declaring initial variables
  	var name=document.getElementById("newq_name").value;
  	var email=document.getElementById("newq_email").value;
  	var comment=document.getElementById("newq_comment").value;
  	var err_text=document.getElementById("qry_post_error_text");
  	var err_dis=document.getElementsByClassName("qry-post-error");
  	err_dis=err_dis[err_dis.length-1];
  	if(name!="") //checking name to be empty
  	{
  		if(email!="") //checking email to be valid
  		{
  			if(filter.test(email))
  			{
  				if(comment!="")
  				{
  					Cookies.set('name',name,{ expires: 7 }); //setting cookie name
  					Cookies.set('email',email,{ expires: 7 });//setting cookie emai
  					var key=firebase.database().ref().child('posts').push().key;
  					var d=new Date(); //getting  timestamp
  					var timestamp="on "+d.getDate()+"\/"+(d.getMonth()+1)+"\/"+d.getFullYear()+"\/"+" at "+d.getHours()+":"+d.getMinutes();
  					mydb.ref('posts/' +key).set({
  					uid: key,
				    name: name,
				    email: email,
				    query : comment,
				    timestamp:timestamp
				  }, function(error) {
					    if (error) {
					      	M.toast({html: 'Something Went Wrong',classes: 'red lighten-5 red-text text-darken-2 toast-red rounded'});
					    } else {
					      document.getElementsByClassName("nw_query_display")[0].style.display="none";
					      M.toast({html: 'Query posted Successfully',classes: 'green lighten-5 green-text text-darken-2 toast-green rounded'});
					      comment="";
					    }
					  });
  				}
  				else
  				{
  					err_dis.style.display="inline-block";
  					err_text.innerHTML="Please enter your Query";
  					$('#newq_comment').focus();
  				}
  			}
  			else{
  				err_dis.style.display="inline-block";
  				err_text.innerHTML="Please enter a valid E-mail"
  				$('#newq_email').focus();
  			}
  		}
  		else{
  			err_dis.style.display="inline-block";
  			err_text.innerHTML="Please enter your E-mail";
  			$('#newq_email').focus();
  		}
  	}
  	else{
  		err_dis.style.display="inline-block";
  		err_text.innerHTML="Please enter your Name";
  		$('#newq_name').focus();
  	}
  }

  function new_query_cont()
  {
	$(".nw_query_display").fadeToggle();
	if(Cookies.get('name')!=undefined)
	{	document.getElementById("newq_name").value=Cookies.get('name');
		document.getElementById("newq_email").value=Cookies.get('email');
		$('#newq_name_label').addClass("active");
		$('#newq_email_label').addClass("active");
		$('#newq_comment').focus();
	}
	else
		$('#newq_name').focus();
  }

  function reply_post(key)
  {
  	var name=document.getElementById(key+"_reply_name").value;
  	var email=document.getElementById(key+"_reply_email").value;
  	var comment=document.getElementById(key+"_reply").value;
  	var err_text=document.getElementById(key+"_reply_error_text");
  	var err_dis=document.getElementById(key+"_error");
  	if(name!="")
  	{
  		if(email!="")
  		{
  			if(filter.test(email))
  			{
  				if(comment!="")
  				{
  					Cookies.set('name',name,{ expires: 7 });
  					Cookies.set('email',email,{ expires: 7 });
  					var key_reply=firebase.database().ref().child('posts/'+key+"/replies").push().key;
  					var d=new Date();
  					var timestamp="on "+d.getDate()+"\/"+(d.getMonth()+1)+"\/"+d.getFullYear()+"\/"+" at "+d.getHours()+":"+d.getMinutes();
  					mydb.ref('posts/'+key+'/replies/'+key_reply).set({
  					uid: key_reply,
				    name: name,
				    email: email,
				    reply : comment,
				    timestamp:timestamp
				  }, function(error) {
					    if (error) {
					      	M.toast({html: 'Something Went Wrong',classes: 'red lighten-5 red-text text-darken-2 toast-red rounded'});
					    } else {
					      document.getElementsByClassName("nw_query_display")[0].style.display="none";
					      M.toast({html: 'Reply posted',classes: 'green lighten-5 green-text text-darken-2 toast-green rounded'});
					      comment_expand(key);
					    }
					  });
  				}
  				else
  				{
  					err_dis.style.display="inline-block";
  					err_text.innerHTML="Please enter Reply";
  					'#'+key+'_reply'.focus();
  				}
  			}
  			else{
  				err_dis.style.display="inline-block";
  				err_text.innerHTML="Please enter a valid E-mail"
  				'#'+key+'_reply_email'.focus();
  			}
  		}
  		else{
  			err_dis.style.display="inline-block";
  			err_text.innerHTML="Please enter your E-mail";
  			$('#'+key+'_reply_email').focus();
  		}
  	}
  	else{
  		err_dis.style.display="inline-block";
  		err_text.innerHTML="Please enter your Name";
  		$('#'+key+'_reply_name').focus();
  	}
  }

  function reply_post_expand(key)
  {
  	$("#"+key+"_reply_post_expand").animate({
      height:'toggle'
    });
    if(Cookies.get('name')!=undefined)
	{	document.getElementById(key+"_reply_name").value=Cookies.get('name');
		document.getElementById(key+"_reply_email").value=Cookies.get('email');
		$('#'+key+'_reply_name_label').addClass("active");
		$('#'+key+'_reply_email_label').addClass("active");
		$('#'+key+'_reply').focus();
	}
	else
		$('#'+key+'_reply_name').focus();
  }

  function comment_expand(key)
  {
  	$("#"+key+"_all_comments").animate({
      		 		height:'toggle'
       		 	});
       		 	if(document.getElementById(key+'_comment_icon_change').innerHTML=="add")
       		 		{
       		 			document.getElementById(key+'_comment_text_change').innerHTML="Hide Replies";
       		 			document.getElementById(key+'_comment_icon_change').innerHTML="remove";
       		 		}
       		 	else
       		 		{
       		 			document.getElementById(key+'_comment_text_change').innerHTML="Show Replies";
       		 			document.getElementById(key+'_comment_icon_change').innerHTML="add";
       		 		}
  }
  function read_every(data)
  {
  	var mainString="";
  	var posts=data.val();
  	delete posts[null];
  	var keys=Object.keys(posts);
  	for(var i=keys.length-1;i>=0;i--)
  	{
  		var k=keys[i];
  		var name=posts[k].name;
  		var email=posts[k].email;
  		var ts=posts[k].timestamp;
  		var q=posts[k].query;
  		 mainString=mainString+"<div class=\"card-panel\" style=\"background-color:rgba(255,255,255,0.93);border-radius:12px\">\n"+
				        "<div class=\"grey-text text-darken-1\">\n"+
				        	"<div class=\"query-box\">"+
					        	"<i class=\"material-icons left grey-text text-lighten-2\">account_circle</i>\n"+
					        	"<span class=\"query-head-name left-align\">\n"+
					        	name+
					        	"</span>\n"+
					        	"<span class=\"right query-head-time\">\n"+
					        		"asked \n"+ts+
					        	"</span>\n"+
						        "<div class=\"query-question orange-text text-darken-1\">\n"+
						        q+
						        "</div>\n"+
						        "<div class=\"btn-small waves-effect waves-light\" key=\""+k+"\" onclick=\"reply_post_expand(this.getAttribute(\'key\'))\"><i class=\"material-icons left\">mode_comment</i>Reply</div>\n"+
						    "</div>\n"+
					        "<div class=\"divider\"></div>\n"+
					        "<div class=\"query-post row\" id=\""+k+"_reply_post_expand\">\n"+
					        	"<center>\n"+
					        		"<span class=\"qry-post-error\" id=\""+k+"_error\">\n"+
										"<span id=\""+k+"_reply_error_text\">\n"+
										"</span>\n"+
									"</span>\n"+
									"<br>\n"+
								"</center>\n"+
						        	"<div class=\"input-field col s10 l5 offset-s1 offset-l1\">\n"+
							          "<i class=\"material-icons prefix\">account_circle</i>"+
							          "<input id=\""+k+"_reply_name\" type=\"text\" class=\"validate grey-text text-darken-2\" style=\"text-transform: uppercase;\">\n"+
							          "<label for=\""+k+"_reply_name\" id=\""+k+"_reply_name_label\">Name</label>\n"+
							        "</div>\n"+
							        "<div class=\"input-field col s10 l5 offset-s1 offset-l0\">\n"+
							          "<i class=\"material-icons prefix\">email</i>\n"+
							          "<input id=\""+k+"_reply_email\" type=\"email\" class=\"validate grey-text text-darken-2\">\n"+
							          "<label for=\""+k+"_reply_email\" id=\""+k+"_reply_email_label\">E-mail</label>\n"+
							        "</div>\n"+
							        "<div class=\"input-field col s10 l10 offset-s1 offset-l1\">\n"+
							          "<i class=\"material-icons prefix\">forum</i>\n"+
							          "<textarea id=\""+k+"_reply\" class=\"materialize-textarea grey-text text-darken-2\"></textarea>\n"+
							          "<label for=\""+k+"_reply\">Comment</label>\n"+
							        "</div>\n"+
							        "<div class=\"col offset-s2 offset-l2\">\n"+
							        	"<div class=\"btn-small waves-effect waves-light blue lighten-2 z-depth-2\" id=\"reply_btn\" key=\""+k+"\" onclick=\"reply_post(this.getAttribute(\'key\'))\">\n"+
							        		"Post reply\n"+
							        	"</div>\n"+
							        "</div>\n"+
					        "</div>\n"+
					        "<div class=\"divider\"></div>\n"+
					        "<div id=\""+k+"_all_comments\" style=\"display: none\">\n";
					         	var reply_ref=firebase.database().ref('posts/'+k+'/replies').on('value',function(snapshot){
					        	var posts2=snapshot.val();
					        	if(posts2===null)
					        	{
					        		var string_reply2="<div class=\"query-answer\">\n"+
						  								"<div class=\"query-question blue-text text-darken-2\">\n"+
															"No Reply yet.\n"+
														"</div>\n"+
														"</div>\n"+
										        	"<div class=\"divider\"></div>\n";
										        	mainString=mainString+string_reply2;
					        	}
					        	else
					        	{
  								var keys2=Object.keys(posts2);
  								//console.log(keys2.length);
	  								for(var j=keys2.length-1;j>=0;j--)
	  								{
	  									var k2=keys2[j];
								  		var name2=posts2[k2].name;
								  		var email2=posts2[k2].email;
								  		var ts2=posts2[k2].timestamp;
								  		var q2=posts2[k2].reply;
								  		var string_reply="<div class=\"query-answer\">\n"+
											        	"<i class=\"material-icons left grey-text\">face</i>\n"+
											        	"<span class=\"query-head-name left-align\">\n"+
											        		name2+
											        	"</span>\n"+
											        	"<div class=\"right query-head-time\">\n"+
											        		"replied \n"+ts2+
											        	"</div>\n"+
												        "<div class=\"query-question\">\n"+
												        q2+
												        "</div>\n"+
										        	"</div>\n"+
										        	"<div class=\"divider\"></div>\n";
										        	mainString=mainString+string_reply;
	  								}
	  							}
					        });
			var string3="</div>\n"+
					      "<div class=\"divider\"></div>\n"+
					       "<div class=\"center\">\n"+
					      	"<div class=\"btn-small z-depth-2 waves-effect waves-light grey darken-1\" style=\"margin: 10px 0;box-shadow:0 0 5px white inset\" key=\""+k+"\" onclick=\"comment_expand(this.getAttribute(\'key\'))\">\n"+
					        		"<i class=\"material-icons left\" id=\""+k+"_comment_icon_change\">add</i>\n"+
					        		"<span id=\""+k+"_comment_text_change\">Show Replies</span>\n"+
					        	"</div>\n"+
					        "</div>\n"+
				        "</div>\n"+
				    "</div>\n"+
			    "</div>\n";
			    mainString=mainString+string3;
  	}
  	var string_fixed_btn="<div class=\"fixed-action-btn\" onclick=\"new_query_cont()\" style=\"z-index: 10\">\n"+
									  "<a class=\"btn-floating btn-large waves-effect waves-light red hoverable z-depth-3\">\n"+
									    "<i class=\"large material-icons\">mode_edit</i>\n"+
									  "</a>\n"+
									"</div>\n";
		mainString=mainString+string_fixed_btn;
  	document.getElementById('live_discussion').innerHTML=mainString;
  }

  function read_every_error(err)
  {
  	 M.toast({html: 'Database read error'});
  }