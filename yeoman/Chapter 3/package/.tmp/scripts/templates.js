angular.module('learningYeomanCh3App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_content.html',
    "<article>\n" +
    "    <div id=\"sidebar\" \n" +
    "      ng-include=\"App.sidebar.url\" \n" +
    "      ng-show=\"App.session.authorized\"\n" +
    "      class=\"col-xs-4 col-sm-3 col-md-2\"></div>\n" +
    "    <div class=\"view-animate-container\">\n" +
    "    \t<loading></loading>\n" +
    "\t    <section class=\"view-animate\" ng-view></section>\n" +
    "\t  </div>\n" +
    "</article>"
  );


  $templateCache.put('views/_footer.html',
    "<div class=\"app-footer clearfix\">\n" +
    "\n" +
    "  <span class=\"app-sitecopy pull-left\">{{ App.sitecopy }}</span>\n" +
    "  <span class=\"app-version pull-right\">{{ App.version }}</span>\n" +
    "</div>"
  );


  $templateCache.put('views/_header.html',
    "<div class=\"header\">\n" +
    "\t<ul class=\"nav nav-pills pull-right\">\n" +
    "\t\t<li ng-repeat=\"item in App.menu\" ng-class=\"{'active': App.location.path() === item.href}\">\n" +
    "\t\t\t<a ng-href = \"#{{item.href}}\"> {{item.title}} </a>\n" +
    "\t\t</li>\n" +
    "\n" +
    "\t</ul>\n" +
    "\t<h3 class=\"text-muted\"> {{ App.sitetitle }} </h3>\n" +
    "</div>\n"
  );


  $templateCache.put('views/_sidebar.html',
    "<p>This is the _sidebar view.</p>\n"
  );


  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet augue sed massa malesuada bibendum vitae at mi. Donec aliquam blandit cursus. Pellentesque ullamcorper rutrum sollicitudin. In turpis massa, semper eget lobortis in, convallis quis metus. Aenean sed mi id est suscipit dignissim et vel tellus. Sed convallis risus vel erat fringilla in convallis eros consequat. Vivamus urna nisi, aliquam non congue id, luctus sit amet dui. Aliquam pretium pulvinar metus, quis condimentum purus dictum pharetra. Vivamus vehicula facilisis erat eget iaculis. Curabitur laoreet vehicula tellus, eget mollis tellus varius eu. Curabitur id neque sapien. Sed ultrices accumsan nibh. Donec tristique, eros nec pulvinar aliquet, ante elit eleifend magna, vel semper orci justo dignissim mi. Duis consectetur suscipit leo. Maecenas suscipit sollicitudin lorem, a laoreet nisl interdum nec. Aenean blandit nunc nec nisl auctor non pellentesque diam semper. Donec faucibus vestibulum sapien at viverra. Proin auctor arcu sed libero blandit posuere. Curabitur nec nulla est, sed pharetra dolor. Nullam pharetra adipiscing lobortis. Pellentesque rhoncus mauris id nulla tristique facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui dolor, ornare vehicula ornare vitae, egestas sit amet leo. Quisque tortor turpis, sollicitudin non hendrerit nec, laoreet sit amet nulla. Quisque fringilla ligula egestas felis ultricies lacinia."
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\">\n" +
    "\t<h1>{{ App.feature.title }}</h1>\n" +
    "\t<img ng-src=\"{{ App.feature.image  }}\"/>\n" +
    "\n" +
    "\t<p class=\"lead\">\n" +
    "\t\t{{ App.feature.body }}\n" +
    "\t</p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "\t<ul class=\"media-list\">\n" +
    "\t\t<li class=\"media feature\" ng-repeat=\"item in App.features\">\n" +
    "\t\t\t<a class=\"pull-left\" href=\"#\">\n" +
    "\t\t\t\t<img alt=\"{{ item.title }}\" src=\"http://placehold.it/80x80\" ng-src=\"{{ item.image }}\"\n" +
    "\t\t\t\t\t class=\"media-object\"/>\n" +
    "\t\t\t</a>\n" +
    "\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t<h4 class=\"media-heading\">{{item.title}}</h4>\n" +
    "\t\t\t\t<p>{{ item.body }}</p>\n" +
    "\t\t\t</div>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "</div>"
  );


  $templateCache.put('views/post-detail.html',
    "<div id=\"post-detail\">\n" +
    "\t<ol class=\"breadcrumb\">\n" +
    "\t\t<li>\n" +
    "\t\t\t<a href=\"#\">Home</a>\n" +
    "\t\t</li>\n" +
    "\t\t<li>\n" +
    "\t\t\t<a href=\"#/posts\">Posts</a>\n" +
    "\t\t</li>\n" +
    "\t\t<li class=\"active\">{{post.title}}</li>\n" +
    "\t</ol>\n" +
    "\t<div class=\"post\">\n" +
    "\t\t<header ng-include=\"'views/post-header.html'\"></header>\n" +
    "\t\t<article ng-bind-html=\"post.body | markdown\"></article>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('views/post-edit.html',
    "<ol class=\"breadcrumb\">\n" +
    "    <li>\n" +
    "        <a href=\"#\">Home</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <a href=\"#/posts\">Posts</a>\n" +
    "    </li>\n" +
    "\t<li ng-show=\"post._id\">\n" +
    "\t\t<a href=\"\" ng-click=\"cancel()\">{{post.title}}</a>\n" +
    "\t</li>\n" +
    "    <li ng-show=\"post._id\" class=\"active\">\n" +
    "        Edit\n" +
    "    </li>\n" +
    "\t<li ng-hide=\"post._id\" class=\"active\">\n" +
    "\t\tNew\n" +
    "\t</li>\n" +
    "</ol>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-7 col-sm-8\">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" ng-submit=\"save(post)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"title\" class=\"col-sm-3 control-label\">Title:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter title here\" name=\"title\"\n" +
    "                           ng-model=\"post.title\" required autofocus=\"\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"body\" class=\"col-sm-3 control-label\">Body:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <textarea class=\"form-control\" rows=\"5\"\n" +
    "                              placeholder=\"Enter contents here\" name=\"body\" ng-model=\"post.body\" required></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"image\" class=\"col-sm-3 control-label\">Image:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <input type=\"url\" class=\"form-control\" placeholder=\"Enter image URL here\" name=\"image\" ng-model=\"post.image\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"tags\" class=\"col-sm-3 control-label\">Tags:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Separate tags with commas\" name=\"tags\" ng-model=\"post.tags\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"slug\" class=\"col-sm-3 control-label\">Published:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <input type=\"checkbox\" class=\"form-control\" ng-model=\"post.published\" name=\"published\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default cancel\" ng-click=\"cancel()\"> Cancel </button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger remove\" ng-click=\"remove()\"> Delete </button>\n" +
    "                        <button type=\"submit\" class=\"btn btn-primary\">\n" +
    "                            Save\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-5 col-sm-4\">\n" +
    "        <aside class=\"center\">\n" +
    "            <img ng-src=\"{{post.image}}\" src=\"http://placehold.it/150x150&amp;text=Image\" class=\"img-thumbnail post-image\">\n" +
    "        </aside>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/post-header.html',
    "<div class=\"header\">\n" +
    "\t<a href=\"\" ng-click=\"view(post._id)\">\n" +
    "\t\t<h1 class=\"media-heading\">{{post.title}}</h1>\n" +
    "\t</a>\n" +
    "\t<span>Posted on {{post.created | date:'mediumDate'}}</span> |\n" +
    "\t\t\t\t\t<span ng-if=\"post.tags\">Tags:\n" +
    "\t\t\t\t\t\t<span class=\"label label-default tag\" ng-repeat=\"t in post.tags\">{{t}}</span> |\n" +
    "\t\t\t\t\t</span>\n" +
    "\t<a href=\"\" ng-click=\"edit(post._id)\" class=\"btn btn-xs btn-default edit\">\n" +
    "\t\t<i class=\"glyphicon glyphicon-pencil\"></i> EDIT\n" +
    "\t</a>\n" +
    "</div>"
  );


  $templateCache.put('views/posts.html',
    "<div id=\"posts\">\n" +
    "\t<button class=\"btn btn-default pull-right\" ng-click=\"add()\">Add New</button>\n" +
    "\t<ol class=\"breadcrumb\">\n" +
    "\t\t<li>\n" +
    "\t\t\t<a href=\"#\">Home</a>\n" +
    "\t\t</li>\n" +
    "\t\t<li class=\"active\">\n" +
    "\t\t\tPosts\n" +
    "\t\t</li>\n" +
    "\t</ol>\n" +
    "\t<ul class=\"posts list-unstyled\" ng-if=\"posts\">\n" +
    "\t\t<li ng-repeat=\"post in posts | filter:tag\">\n" +
    "\t\t\t<div class=\"post\" data-id=\"{{post._id}}\">\n" +
    "\t\t\t\t<header ng-include=\"'views/post-header.html'\"></header>\n" +
    "\t\t\t\t<section ng-bind-html=\"post.body | markdown:150\"></section>\n" +
    "\t\t\t</div>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "\t<div class=\"alert alert-info\" ng-if=\"!posts\">\n" +
    "\t\t<strong>Notice:</strong> There are no posts available.\n" +
    "\t</div>\n" +
    "</div>"
  );

}]);
