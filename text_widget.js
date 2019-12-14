function TextWidget() {
	this.serverURL = '';
	this.locationId = '';
  this.agent_name = '';
  this.online_state = '';
  this.available_date = '';
  this.work_time = '';
	this.heading = '';
	this.intro_message = '';
  this.header_style = '';
	this.nameField = function() {
    return [
      '    <div class="form-group group_name">',                  
      '      <label for="Name" class="sr-only">Name</label>',
      '      <input type="text" class="form-control" placeholder="Name" id="name" required value="' + this.getName() + '">',
      '      <div class="TextInput__Bar"></div>',
      '    </div>',
    ];
  };
  this.phoneField = function() {
    return [
      '    <div class="form-group group_phone" id="phone-group">',
      '      <label for="Mobile Number" class="sr-only">Mobile Phone</label>',
      '      <input type="text" class="form-control" placeholder="Mobile Phone" id="phone" required value="' + this.getPhone() + '" onkeyup="checkPhone()">',
      '      <div class="TextInput__Bar"></div>',
      '    </div>',
    ];
  };
  this.message = function() {
    return [
      '<div class="Prompt__MessageBubble">',
      '<div class="Prompt__AvatarCustom Prompt__AvatarCustom--BRight" style="background-image: url(&quot;' + this.getImageURL() + '&quot;);">',
      '</div>',
      '<div class="Prompt__PromptText">',
      '<div class="TextInput__Bar"></div>',
      '</div>',
      '<div>',
      'Hi there, have a question? Text us here.',
      '</div>',
      '</div>',
      '</div>',
    ]
  }
	this.template = function() {
		return [
			'    <div class="hl_text-widget" id="hl_text-widget">',
			'      <button class="hl_text-widget--btn" id="hl_text-widget--btn">',
			'        <div class="icon widget-open-icon active">',
			'          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 199.83 181.57" enable-background="new 0 0 199.83 181.57" xml:space="preserve" style="width:60%; height:auto;"><g><path fill="#fff" d="M182.21,35.37h-25.77V18.17c0-9.49-7.74-17.2-17.21-17.2H18.85c-9.48,0-17.2,7.71-17.2,17.2v77.38 c0,9.49,7.72,17.2,17.2,17.2v34.4l45.87-34.4h74.51c9.46,0,17.21-7.71,17.21-17.2V52.56h25.77v77.41h-17.18v17.18l-22.94-17.18    H70.14l-18.31,13.92c2.83,2.04,6.28,3.26,10.01,3.26h74.53l45.84,34.4v-34.4c9.49,0,17.21-7.69,17.21-17.18V52.56    C199.42,43.07,191.7,35.37,182.21,35.37z M58.98,95.55l-22.92,17.2v-17.2H18.85V18.17h120.38v77.38H58.98z"/><path fill="#fff" d="M36.06,52.56h77.37c4.76,0,8.59-3.83,8.59-8.59c0-4.75-3.83-8.6-8.59-8.6H36.06c-4.77,0-8.6,3.85-8.6,8.6 C27.46,48.73,31.29,52.56,36.06,52.56z"/><path fill="#fff" d="M96.25,69.78c0-4.77-3.87-8.61-8.6-8.61H36.06c-4.77,0-8.6,3.85-8.6,8.61c0,4.72,3.83,8.59,8.6,8.59h51.59    C92.38,78.37,96.25,74.5,96.25,69.78z"/></g></svg>',
			'        </div>',
			'        <div class="icon widget-close-icon">',
			'          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="24" height="24" viewBox="0 0 23.8 23.9">',
			'            <defs>',
			'              <style>',
			'                .cls-1 {',
			'                  fill: #fff;',
			'                  fill-rule: evenodd;',
			'                }',
			'              </style>',
			'            </defs>',
			'            <path d="M13.3 11.9L23.5 22.2C23.9 22.6 23.9 23.2 23.5 23.6 23.3 23.8 23.1 23.9 22.8 23.9 22.6 23.9 22.3 23.8 22.1 23.6L11.9 13.4 1.7 23.6C1.5 23.8 1.2 23.9 1 23.9 0.7 23.9 0.5 23.8 0.3 23.6 -0.1 23.2-0.1 22.6 0.3 22.2L10.5 11.9 0.3 1.7C-0.1 1.3-0.1 0.7 0.3 0.3 0.7-0.1 1.3-0.1 1.7 0.3L11.9 10.5 22.1 0.3C22.5-0.1 23.1-0.1 23.5 0.3 23.9 0.7 23.9 1.3 23.5 1.7L13.3 11.9Z"',
			'              class="cls-1" />',
			'          </svg>',
			'        </div>',
			'      </button>',
      '      <div class="header_img"><img src="'+ this.image_url + '"/></div>',
      '      <div class="chat_header">',
                //Display header contents based on header style
      '      </div>',
			'      <div class="hl_text-widget--box" id="hl_text-widget--box" style="display: none;">',
			'        <div class="hl_text-widget--box-inner">',
			'          <div class="hl_text-widget--form">',
                  '<div class="hl_text-widget--heading">',
      '              <div>' + this.getIntroMessage() + '</div>',
      '            </div>',
      '            <form id="message-form">',
                    this.nameField().join('\n'),
              			this.phoneField().join('\n'),
			'              <div class="form-group">',
			'                <label class="sr-only">Message</label>',
			'                <textarea class="form-control" placeholder="Message" tabindex="1" id="message" style="height:36px" required></textarea>',
      '                <div class="TextInput__Bar"></div>',
			'              </div>',
      '               <button type="submit" class="btn btn-primary" id="send">Send</button>',
      '            </form>',
      '              <p class="small-text">By submitting you agree to receieve text messages at the number provided. Message/data',
      '              rates apply.</p>',
			'              <div class="text-center">',
			'                <button type="button" class="btn btn-primary" id="hl_text-widget--send-btn">Send</button>',
			'              </div>',

			'            <div class="powered-by">',
			'               Powered by<a href="http://www.gohighlevel.com/?utm_source=text-widget&utm_medium=poweredby&utm_campaign=poweredby" target="_blank">',
			'                    HighLevel',
			'               </a>',
			'            </div>',

			'          </div>',
			'          <div class="hl_text-widget--thankyou">',
      '            <div class="hl_text-widget--heading">',
      '              <div>' + this.getIntroMessage() + '</div>',
      '            </div>',

			'          </div>',
			'        </div>',
			'      </div>',
			'    </div>',
		];
	};
}



TextWidget.prototype.getHeading = function() {
  return this.heading || "We'll text you!";
};

TextWidget.prototype.getIntroMessage = function() {
  return this.intro_message || 'One of our guys will text you back on this number';
};

TextWidget.prototype.getAgentName = function() {
  return this.agent_name || 'Jane Doe';
};

TextWidget.prototype.getOnlineState = function() {
  return this.online_state || 'offline';
};

TextWidget.prototype.getavailableDate = function() {
  return this.available_date || 'Mon - Fri';
};

TextWidget.prototype.getworkTime = function() {
  return this.work_time;
};

TextWidget.prototype.getImageURL = function() {
  return this.image_url || 'http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg';
};

TextWidget.prototype.getHeadingMessage = function() {
  return this.heading_message || 'We will text you!';
};

TextWidget.prototype.getTimezone = function() {
  return this.timezone || 'US';
};

TextWidget.prototype.getHeaderStyle = function() {
  return this.header_style || 'header_style1';
};

var header_style1, header_style2, header_style3, header_style4;
var header_style;
var check_phone = false;
var country_id = "";

var online_html = '<span style="margin: 0 0 10px 14px; font-size: 12px;">(online)</span></div>';

TextWidget.prototype.bindClickHandler = function() {
  var _self = this;
  //Define header contents variables
  intro_message = this.getIntroMessage();
  agent_name = this.getAgentName();
  available_date = this.getavailableDate();
  work_time = this.getworkTime();
  header_style = this.getHeaderStyle();
  image_url = this.getImageURL();
  heading_message = this.getHeadingMessage();
  country_id = this.getTimezone();
  jQuery('#name').focus();


  //Time comparison part to determin whether the agent is online or offline
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var timezoneID = '';

  if (country_id == 'US') {
    timezoneID = 'America/New_York';
  }
  else if (country_id == 'UK') {
    timezoneID = 'Europe/London';
  }
  else if (country_id == 'AU') {
    timezoneID = 'Australia/Sydney';
  }

  if (curTimeCalc > setStartTimeCalc  && curTimeCalc < setEndTimeCalc && onlineState) {
    online_html = '<span style="margin: 0 14px; font-size: 12px;">(online)</span></div>';
  }
  else {
    online_html = '<span style="margin: 0 14px; font-size: 12px;">(offline)</span></div>';
  }

  var usaTime = new Date().toLocaleString("en-US", {timeZone: timezoneID});
  console.log(usaTime);
  date = new Date(usaTime);
  var dayofweek = date.getDay() - 1; // get Day of week 
  var curHour = date.getHours();
  var curMin = date.getMinutes();
  var curTimeCalc = curHour * 60 + curMin * 1;
  const dayName = days[dayofweek];
  curDateInfo = work_time[dayName];

  setStartTime = curDateInfo['start_hour'];

  var setStartTimeCalc = setStartTime.split(':')[0] * 60 + setStartTime.split(':')[1] * 1; 

  setEndTime = curDateInfo['end_hour'];
  var setEndTimeCalc = setStartTime.split(':')[0] * 60 + setEndTime.split(':')[1] * 1;

  var onlineState = curDateInfo['enable_state'];

  //Define 4 kinds of header styles
  header_style1 = '<div class="chat_option"><span id="agent_name">' + agent_name + '</span><br></span><span class="work_start_hour">' + setStartTime + '</span>' + '<span class="work_start_hour"> - </span>' + '<span class="work_end_hour">' + setEndTime + '</span>';
  header_style2 = '<div class="chat_option"><span id="agent_name">' + agent_name + '</span><br><span class="available_date">'+ heading_message + '</span>';
  header_style3= '<div class="chat_option"><div class="chat_icon"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 199.83 181.57" enable-background="new 0 0 199.83 181.57" xml:space="preserve" ><g><path fill="#fff" d="M182.21,35.37h-25.77V18.17c0-9.49-7.74-17.2-17.21-17.2H18.85c-9.48,0-17.2,7.71-17.2,17.2v77.38 c0,9.49,7.72,17.2,17.2,17.2v34.4l45.87-34.4h74.51c9.46,0,17.21-7.71,17.21-17.2V52.56h25.77v77.41h-17.18v17.18l-22.94-17.18    H70.14l-18.31,13.92c2.83,2.04,6.28,3.26,10.01,3.26h74.53l45.84,34.4v-34.4c9.49,0,17.21-7.69,17.21-17.18V52.56    C199.42,43.07,191.7,35.37,182.21,35.37z M58.98,95.55l-22.92,17.2v-17.2H18.85V18.17h120.38v77.38H58.98z"/><path fill="#fff" d="M36.06,52.56h77.37c4.76,0,8.59-3.83,8.59-8.59c0-4.75-3.83-8.6-8.59-8.6H36.06c-4.77,0-8.6,3.85-8.6,8.6 C27.46,48.73,31.29,52.56,36.06,52.56z"/><path fill="#fff" d="M96.25,69.78c0-4.77-3.87-8.61-8.6-8.61H36.06c-4.77,0-8.6,3.85-8.6,8.61c0,4.72,3.83,8.59,8.6,8.59h51.59    C92.38,78.37,96.25,74.5,96.25,69.78z"/></g></svg></div><span id="agent_name">' + agent_name + '<br><span class="available_date">'+ heading_message + '</span>';
  header_style4 = '<div class="chat_option"><span class="h4_heading_message">'+ heading_message + '</span>';

  jQuery(function() {
    jQuery('.chat_header').hide();
    jQuery('.header_img').hide();
    jQuery('#hl_text-widget--btn').on('click', function() {
      jQuery('.Prompt__MessageBubble').hide();
      if(jQuery('.chat_header').css('display') == 'none')
      {
         console.log(header_style);
        if(header_style == 'header_style1') {
          header_style = header_style1;
          jQuery('.header_img').show();
        }
        else if (header_style == 'header_style2') {
          header_style = header_style2;
          jQuery('.header_img').show();
        }
        else if (header_style == 'header_style3') {
          header_style = header_style3;
        }

        else if (header_style == 'header_style4') {
          header_style = header_style4;
        }
       
        if(!jQuery('.chat_header').children().length){
          jQuery('.chat_header').show().html(header_style + online_html);
        }
        else
        {
          jQuery('.chat_header').show();
        }
    }
      else
      {
        jQuery('.chat_header').hide();
        jQuery('.header_img').hide();
      }

     
      var _this = jQuery(this);
      var _box = jQuery('#hl_text-widget--box');
      _this.toggleClass('active');
      _box.fadeToggle(300);
      _box.toggleClass('active');
      _this.find('.widget-open-icon').toggleClass('active');
      _this.find('.widget-close-icon').toggleClass('active');
    });

    jQuery('#message-form').on('submit', function(e) {

      e.preventDefault();
      var name = jQuery('#name').val();

      var phone = libphonenumber.format(libphonenumber.parse(jQuery('#phone').val(), country_id), 'E.164');
      var message = jQuery('#message').val();
      var name = jQuery('#name').val();

      _self.createCookie('phone', phone);
      _self.createCookie('name', name);

      jQuery.ajax({
        url: _self.serverURL + '/message',
        type: 'POST',
        data: JSON.stringify({
          name: name,
          phone: phone,
          message: message,
          location_id: _self.locationId
        }),
        contentType: 'application/json',
        success: function(){
          var btn = jQuery('.hl_text-widget--form button')
          if (btn) btn.show();

          var _boxInner = jQuery('.hl_text-widget--form');
          if (_boxInner) _boxInner.css({ marginLeft: '-100%'});

          var msg = jQuery('#message')
          if (msg) msg.val('');

          var receivedMessage = '<div class="SubmittedMessage SubmittedMessage--visible" style="background-color: rgba(76, 118, 224, 0.12);"><div class="SubmittedMessage__Title">'+ phone + '</div><div>'+ message + '</div></div>';
          var submittedNotification = '<div class="SubmittedMessage__SendStatus"><img alt="" src="https://connect.podium.com/images/received.gif"><p>Received</p></div>';
          var confirmationMessage = '<div class="ConfirmationMessage"><div class="ConfirmationMessage__PhoneNumber">+1 303 757 5661</div><div class="ConfirmationMessage__Message"><div class="ConfirmationMessage__Title">We received your message.</div><div class="ConfirmationMessage__Subtitle"><p>Thanks. Our team will text you</p><p>from the number above.</p></div><div class="ConfirmationMessage__Check" style=""><svg class="checkmark" viewBox="0 0 52 52" style="width: 18px; height: 18px; border-radius: 50%; display: block; stroke-width: 4; stroke: white; stroke-miterlimit: 10; box-shadow: rgb(0, 189, 148) 0px 0px 0px inset; animation: 0.5s ease-in-out 0.3s 1 normal forwards running fill, 0.3s ease-in-out 0.65s 1 normal forwards running scale, 0.5s ease-in-out 0.5s 1 normal forwards running box-shadow;"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" style="stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 4; stroke-miterlimit: 10; stroke: rgb(0, 189, 148); fill: none; animation: 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0s 1 normal forwards running stroke;"></circle><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" style="transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; animation: 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s 1 normal forwards running stroke;"></path></svg></div></div></div>';
          var poweredby = '<div class="powered-by" style="margin:50px 0 0 0;">Powered by<a href="http://www.gohighlevel.com/?utm_source=text-widget&utm_medium=poweredby&utm_campaign=poweredby" target="_blank">  HighLevel</a></div>';
          jQuery('.hl_text-widget--thankyou').append(receivedMessage + submittedNotification + confirmationMessage + poweredby);
        },
        error: function(xhr, textStatus, errorThrown) {
          var btn = jQuery('.hl_text-widget--form button')
          if (btn) btn.show();

          if (!xhr || !xhr.responseText)
              return;
          var err = JSON.parse(xhr.responseText);
          var errmsgbox = jQuery("#errmsgdisp")
          if (err && err.msg && errmsgbox)
              errmsgbox.html(err.msg)
          else if (errmsgbox)
              errmsgbox.html('There was some issue. Please enter correct name, phone and message before you hit send.')
          console.log(xhr.responseText);
        }
      });

      var btn = jQuery('.hl_text-widget--form button')
      if (btn) btn.hide();

    });

    jQuery('#hl_text-widget--send-btn').on('click', function(e) { 
     jQuery('#send').click();
    });

    jQuery('#hl_text-widget--send-another').on('click', function(e) {
      e.preventDefault();
      var _boxInner = jQuery('.hl_text-widget--form');
      _boxInner.css({
        marginLeft: 0,
      });
    });

    jQuery('input').focus(function() {
      id = jQuery(this).attr('id');
      jQuery('label[for='+id).addClass('filledout');
    });

    jQuery('input').blur(function() {
      if(!jQuery(this).val()){
        jQuery('label[for='+jQuery(this).attr('for')+']').removeClass('filledout');
      }
    });

    jQuery('#phone').on('keyup paste', function(e) {
      jQuery(e.target).val(
        libphonenumber.formatNumber(
          {
            country: country_id,
            phone: jQuery(e.target).val()
          },
          'National'
        )
      );
    });

    jQuery('#name').on('input', function(){  
    if(jQuery('#name').val()){
      if(jQuery(this).parent().find('.TextInput__Checkmark').length){
        } else{
            jQuery('.group_name').append('<span class="TextInput__Checkmark TextInput__Checkmark--show"><svg class="checkmark" viewBox="0 0 52 52" style="width: 18px;float:right;margin-top:-23px; height: 18px; border-radius: 50%; display: block; stroke-width: 4; stroke: white; stroke-miterlimit: 10; box-shadow: rgb(0, 189, 148) 0px 0px 0px inset; animation: 0.5s ease-in-out 0.3s 1 normal forwards running fill, 0.3s ease-in-out 0.65s 1 normal forwards running scale, 0.5s ease-in-out 0.5s 1 normal forwards running box-shadow;"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" style="stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 4; stroke-miterlimit: 10; stroke: rgb(0, 189, 148); fill: none; animation: 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0s 1 normal forwards running stroke;"></circle><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" style="transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; animation: 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s 1 normal forwards running stroke;"></path></svg></span>');
          }
      }           
      else{
        jQuery(this).parent().find('.TextInput__Checkmark').remove();
      }
    });

    jQuery('#phone').on('keyup', function(){
      console.log(check_phone);
      if(jQuery('#phone').val() && check_phone){
        if(jQuery(this).parent().find('.TextInput__Checkmark').length){
        } else{
            jQuery('.group_phone').append('<span class="TextInput__Checkmark TextInput__Checkmark--show"><svg class="checkmark" viewBox="0 0 52 52" style="width: 18px;float:right;margin-top:-23px; height: 18px; border-radius: 50%; display: block; stroke-width: 4; stroke: white; stroke-miterlimit: 10; box-shadow: rgb(0, 189, 148) 0px 0px 0px inset; animation: 0.5s ease-in-out 0.3s 1 normal forwards running fill, 0.3s ease-in-out 0.65s 1 normal forwards running scale, 0.5s ease-in-out 0.5s 1 normal forwards running box-shadow;"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" style="stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 4; stroke-miterlimit: 10; stroke: rgb(0, 189, 148); fill: none; animation: 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0s 1 normal forwards running stroke;"></circle><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" style="transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; animation: 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s 1 normal forwards running stroke;"></path></svg></span>');
            }
        }
        else{
          jQuery(this).parent().find('.TextInput__Checkmark').remove();
        }      
    })
  });
};

TextWidget.prototype.loadCSS = function() {
  var _self = this;
  jQuery('head').append(
    '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">'
  );
  jQuery('head').append(
    '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'
  );
  jQuery('head').append(
    '<meta name="HandheldFriendly" content="true">'
  );

  jQuery('head').append(
    '<link href="./text_widget.css" rel="stylesheet" type="text/css" />'
  );
  jQuery('head').append(
    '<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />'
  );
  jQuery('head').append(
    '<script src="https://unpkg.com/libphonenumber-js/bundle/libphonenumber-js.min.js"></script>'
  );
  jQuery('head').append(
    '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>'
  );
  
  var checkReady = function(callback) {
    if (window.libphonenumber) {
      callback();
    } else {
      window.setTimeout(function() {
        checkReady(callback);
      }, 100);
    }
  };

  setTimeout(function() {
    checkReady(function() {
      _self.addTemplateToPage();
    });
  }, 600);

  setTimeout(function() {
    checkReady(function() {
      _self.addmessageToPage();
    });
  }, 1500);
};

TextWidget.prototype.getPhone = function() {
  return this.readCookie('phone')
    ? libphonenumber.formatNumber(
        {
          country: country_id,
          phone: this.readCookie('phone')
        },
        'National'
      )
    : '';
};

TextWidget.prototype.getName = function() {
	return this.readCookie('name') || '';
};

TextWidget.prototype.createCookie = function(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
  } else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
};

TextWidget.prototype.readCookie = function(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};


var checkPhone = function(e) {
  var phoneValid = libphonenumber.isValidNumber(libphonenumber.parse(jQuery('#phone').val(), country_id));
  console.log(phoneValid);
  if (!phoneValid) {
    check_phone = false;
    document.getElementById("phone").setCustomValidity("Please provide valid phone number");
  } else {
    check_phone = true;
    document.getElementById("phone").setCustomValidity("");
  }
};


TextWidget.prototype.eraseCookie = function(name) {
  createCookie(name, '', -1);
};

TextWidget.prototype.addTemplateToPage = function() {
  var element = document.createElement('div');
  element.id = 'hl_text-widget';
  element.className = 'hl_text-widget';
  element.innerHTML = this.template().join('\n');
  jQuery('body').append(element);

  this.bindClickHandler();
};

TextWidget.prototype.addmessageToPage = function() {
  var element = document.createElement('div');
  element.id = 'hl_text-widget';
  element.className = 'hl_text-widget';
  element.innerHTML = this.message().join('\n');
  jQuery('body').append(element);

};


TextWidget.prototype.load = function() {
  var _self = this;
  if (typeof jQuery !== 'undefined') {
    setTimeout(function() {
      _self.loadCSS();
    }, 300);
  } else {
    var script = document.createElement('SCRIPT');
    script.src =
      'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    var checkReady = function(callback) {
      if (window.jQuery) {
        callback(jQuery);
      } else {
        window.setTimeout(function() {
          checkReady(callback);
        }, 100);
      }
    };

    checkReady(function(jQuery) {
      setTimeout(function() {
        _self.loadCSS();
      }, 600);
    });

  }
};


var PROVISION =
  PROVISION ||
  (function() {
    return {
      init: function(locationId, extras) {
        var widget = new TextWidget();
        if (extras && extras.baseURL){
          widget.serverURL = extras.baseURL;
        } else {
          widget.serverURL = 'https://api.gohighlevel.com';
        }
        widget.locationId = locationId;
        if (extras && extras.intro_message) widget.intro_message = extras.intro_message;
        if (extras && extras.agent_name) widget.agent_name = extras.agent_name;
        if (extras && extras.work_time) widget.work_time = extras.work_time;
        if (extras && extras.image_url) widget.image_url = extras.image_url;
        if (extras && extras.heading_message) widget.heading_message = extras.heading_message;
        if (extras && extras.timezone) widget.timezone = extras.timezone;
        if (extras && extras.header_style) widget.header_style = extras.header_style; 
        widget.load();
    }
  };
})();