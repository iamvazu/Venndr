<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
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
                    </nav> -->
    <v-toolbar>
        <v-toolbar-title>Venndr</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Home</v-btn>
        <v-btn flat>Pricing</v-btn>
        <v-btn flat>Login</v-btn>
        <v-btn flat success>Sign Up</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'navbar'
}
</script>