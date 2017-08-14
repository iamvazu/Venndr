<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <a class="navbar-brand" href="#">Venndr</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>

            <a class="nav-link" style="color: #fff" href="#">Login</a>
            <a class="nav-link signup" href="#">Sign up</a>            
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="less" scoped>
    .navbar {
        background-color: transparent;
    }
    
    .scrolling-navbar {
        -webkit-transition: background .5s ease-in-out, padding .5s ease-in-out;
        -moz-transition: background .5s ease-in-out, padding .5s ease-in-out;
        transition: background .5s ease-in-out, padding .5s ease-in-out;
    }
    
    @media only screen and (max-width: 768px) {
        .navbar {
            background-color: #1C2331;
        }
    }
    .signup {
        background-color: #00695B;
        color: #fff;
        border-radius: 2px;
    }
</style>
