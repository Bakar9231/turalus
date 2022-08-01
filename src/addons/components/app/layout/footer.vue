<template>
<footer id="footer">
<div class="clearfix"></div>
<div class="col-full">
<div class="footer-row row vertical-align">
<div class="footer-contact-info">
<div class="footer-logo">
<a href="index.html">
<img src="public/logo-footer.png">
</a>
</div>
<ul class="list-unstyled store-timings">
<li>BROOKLYN BRANCH</li>
<li>(718) 339 8001</li>
</ul>
<ul class="list-unstyled store-timings">
<li>
<span class="float-left">Monday - Sunday</span>
<span class="store-align">11 AM - 2 AM</span>
</li>
</ul>
<div class="footer-social-icons"> <span class="social-icon-text">Follow us</span>
<ul class="social-icons list-unstyled">
 <li>
<a class="fab fa-facebook-f" href="https://www.facebook.com/memoshishkebab/"></a>
</li>
<li>
<a class="fab fa-twitter" href="https://twitter.com/memoshishkebab"></a>
</li>
<li>
<a class="fab fa-instagram" href="https://www.instagram.com/memoshishkebab/"></a>
</li>
</ul>
</div>
</div>
<div class="footer-contact-form">
<div class="contact-form">
<h3 class="contact-form-title">Write Hello to Memo Shish Kebab</h3>
<div role="form">
<form id="form" method="POST">
<div class="form-group row">
<div class="col-xs-12 col-md-6">
<label>First name*</label>
<input type="text" name="firstName" size="40" placeholder="First Name" required="">
</div>
<div class="col-xs-12 col-md-6">
<label>Last name*</label>
<input type="text" name="lastName" size="40" placeholder="Last Name" required="">
</div>
</div>
<div class="form-group row">
<div class="col-xs-12 col-md-6">
<label>Your Email*</label>
<input type="email" name="email" size="40" placeholder="Your Email" required="">
</div>
<div class="col-xs-12 col-md-6">
<label>Subject</label>
<input type="text" name="subject" size="40" placeholder="Subject">
</div>
</div>
<div class="form-group">
<label>Your Message</label>
<textarea name="message" cols="40" rows="10" placeholder="Enter your Message" required=""></textarea>
</div>
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6Lev25QUAAAAAE5LAoQLi4-8k-i6lU3BCCoy9w60"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lev25QUAAAAAE5LAoQLi4-8k-i6lU3BCCoy9w60&amp;co=aHR0cHM6Ly9tZW1vc2hpc2hrZWJhYi5jb206NDQz&amp;hl=en&amp;v=5JGZgxkKwe0uOXDdUvSaNtk_&amp;size=normal&amp;cb=7hrlvcz6j8g" width="304" height="78" role="presentation" name="a-sjpi6x15i06t" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
</div>
<div class="form-group clearfix">
<p>
<input type="submit" value="Send Message">
</p>
</div>
<div id="success_message" style="display:none; ">
<div class="alert alert-success" role="alert">
Submitted the form successfully!<br>We will get back to you soon.
</div>
</div>
<div id="error_message" style="display:none; ">
<div class="alert alert-danger" role="alert">
Sorry there was an error sending your form.
</div>
</div>
</form>
</div>
</div>
</div>
<div class="footer-contact-info">
<ul class="list-unstyled store-timings">
<li>MANHATTAN BRANCH</li>
<li>(212) 381 2115</li>
<li>OPEN 24 HOURS</li>
</ul>
</div>
</div>
</div>
</footer>

<div class="site-info">
<p class="copyright">Copyright © 2022. All rights reserved.</p>
</div>
</template>