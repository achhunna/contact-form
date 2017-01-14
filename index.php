<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Contact Form</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="form-container">
                <header>
                    <h1>Contact Form</h1>
                    <div class="intro">
                        Send me a note. You can also send email to anyone, try it!
                    </div>

                </header>

                <form action="" id="contact_form">
                    <div class="output">#</div>
                    <span class="form-item left">
                        <label>Name</label><input type="text" name="name" id="name">
                    </span>
                    <span class="form-item right">
                        <label>Email</label><input type="email" name="email" id="email">
                    </span>
                    <span class="form-item">
                        <label>To (Email)
                            <span class="custom-checkbox"><input type="checkbox" name="custom_checkbox" id="custom_checkbox">Custom</span>
                        </label>
                        <input type="email" name="to" id="to" placeholder="achhunna@gmail.com">
                    </span>
                    <span class="form-item long">
                        <label>Subject</label><input type="text" name="subject" id="subject">
                    </span>

                    <span class="form-item long">
                        <label>Message</label><textarea name="message" id="message" rows="10"></textarea>
                    </span>
                    <div>
                        <button type="button" onclick="submit_form()">Submit</button>
                    </div>
                </form>
            </div>
            <footer>
                Disclaimer: I am not liable for user generated content using the tool. Please use responsibly. &copy; <?php echo date('Y'); ?> Achhunna. All Rights Reserved.
            </footer>

        </div>
    </body>
</html>
