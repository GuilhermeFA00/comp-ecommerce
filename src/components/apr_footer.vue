<template>
    <footer class="footer-container bg-light w-100 border-top-light">
        <div class="footer-content container-full d-flex justify-content-between mx-auto">
            <div class="footer-content-logo">
            </div>

            <div class="footer-content-main d-flex column align-items-center">
                <h5>&copy; FA Ecommerce 2021 </h5>
                <ul class="navbar-nav d-flex mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" >Catalogues</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Planning tools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Contact us</a>
                    </li>
                </ul>
                <button
                    class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                    </svg>
                </button>
            </div>

            <div class="footer-content-contacts">
                <div
                    class="product-features-small vertical-container d-flex justify-content-between position-relative w-100">
                    <div class="feature-icons">
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </a>
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                            </svg>
                        </a>
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </a>
                    </div>
                    <h5 class="vertical-container-title d-flex align-items-center position-absolute">
                        <div class="line"></div>
                        Contacts
                    </h5>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
/* |||| FOOTER |||| */
.footer-container {
  height: 250px;
}

.footer-content {
  padding-top: 2.5rem;
}

.footer-content-logo .navbar-logo {
  padding: 0;
}

.footer-content-main h5 {
  margin-bottom: 2.5rem;
}

.footer-content-main ul {
  margin-bottom: 2rem;
  font-size: 0.85rem;
}

.signupFrm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.title {
  font-size: 50px;
  margin-bottom: 50px;
}

.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}

.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

::placeholder {
  color: transparent;
}

.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}

.submitBtn:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}
.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
}

.input:focus {
  border: 2px solid purple;
}
</style>