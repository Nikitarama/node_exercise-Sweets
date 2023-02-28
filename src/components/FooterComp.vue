<template>
    <div> <footer>
        <div class="footer-top">
            <div class="container">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                                <li>Sunday: 8:00 AM - 12:00 PM</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    

                    <div class="col-md-4">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>Claremont 132 Herchers Cape Town</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">sweetyNC@gmail.com</a></li>
                           
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        
    </footer></div>
</template>

<script>

</script>



<style scoped>
footer {
    color: #fff;
    font-family:  Georgia, "Times New Roman", Times, serif;
}
ul {
    padding: 0px;
}
ol, ul {
    margin-bottom: 0px;
}


.footer-day-time {
    padding-bottom: 30px;
    border-bottom: 2px solid #7a6f6f;
    padding-top: 14px;
    margin-bottom: 55px;
}
.footer-day-time ul li {
    display: inline;
    margin-right: 20px;
}
.footer-day-time ul li:last-child {
    margin-right: 0px;
}
.phone-no a {
    color: #fff;
    font-family: PlayfairDisplay-Black;
    font-size: 34px;
    font-weight: bold;
}
.footer-top {
    background: #2f2f2f;
    padding:50px 0 50px;
}
.footer-top h4 {
    font-size: 19px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.footer-top p {
    font-size: 13px;
    line-height: 2;
}

footer p {
  margin-bottom:0;
}
.footer-logo {
    display: block;
    margin-bottom: 32px;
}
.address1 li {
    list-style: none;
    position: relative;
    padding: 0px 0 14px 34px;
    line-height: 26px;
}
ul.address1 span {
    position: absolute;
    width: 40px;
    max-width: 40px;
    left: 0;
}
.address1 li a {
    color: #fff;
    text-decoration: none;
}
ul.address1 i {
    width: 20px;
    position: absolute;
    left: 0px;
    text-align: center;
    font-size: 28px;
    top: 0;
}

ul.address1 i.fa-envelope {
    font-size: 18px;
    top: 4px;
}
footer ul.social-icon {
    float: left;
}
footer .social-icon li i:hover {
    color:#7a6f6f;
    scale: 1.5;
}

.footer-bottom {
    background: #4b8800;
    padding: 10px 0px;
}
.footer-bottom ul li {
    display: inline;
    margin-right: 20px;
    font-size: 18px;
}
.footer-bottom ul li a{
    color:#fff;
}

.footer-bottom ul {
    float: right;
}

.social-icon a {
    color: lightpink;
    font-size: 20px;
}


</style>