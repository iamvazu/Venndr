<template>
    <div class="container-fluid">
        <div class="row">
            <div id="form-view" class="col-lg-6">
                <div id="desc" class="col-lg-11">
                    <h1 class="h1-responsive">Venndr</h1>
                    <hr class="hr-light">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet fermentum. Maecenas sit amet odio quis mauris finibus hendrerit. Nullam venenatis eget magna ac volutpat. Maecenas id gravida turpis. Vivamus lacinia, eros vel accumsan porta, enim sem malesuada sapien, bibendum dignissim est nisl vitae odio. Vivamus laoreet commodo arcu, non commodo tellus luctus ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pharetra convallis venenatis.
                    </p>
                    <hr class="hr-light">
                </div>
            </div>
            <div id="job-view" class="card col-lg-6">
                <div ng-repeat="post in seeker.jobs.$$state.value.data.result" class="container job-card">
                    <div class="jumbotron">
                        <h1 class="h1-responsive">{{ post.company }}</h1>
                        <p class="lead">
                            {{ post.title }} - {{ post.type }}
                            <br> {{post.location}}
                        </p>
                        <hr class="my-2">
                        <span ng-bind-html="seeker.getPrettyString(post.description)"></span>
                        <p class="lead">
                            <a class="btn btn-success btn-lg" target="_blank" ng-href="{{post.url}}" role="button">Apply</a>
                            <a class="btn btn-secondary btn-lg" ng-click="seeker.magicModal(post)" data-toggle="modal" data-target="#learn" role="button">Learn More</a>
                            <a class="btn btn-info btn-lg" target="_blank" ng-href="{{post.company_url}}" role="button">About {{ post.company}}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {

}
</script>

<style scoped>

</style>
