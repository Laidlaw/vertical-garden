#Vertical Garden

Starting with:

+ gulp
+ docssa
+ susy
+ fittext
+ waypoints
+ metaquery
+ webshim

##To Do

+ remove wach
+ Add gulp dependencies to package.json
+ Add waypoints, webshim
+ Initiate fittext typography
+ Strip out docssa examples
+ create a style guide page
...This will include pastel and neutral colors to help create new color themes. Should look into sass mixins for this.
+ Create component structure that mimics docssa. Something like pattern library.


##History

We're pulling alot from [Ben Smithett](https://github.com/bensmithett/style) but starting with [docssa](http://docssa.info/) as the logic for the sass structure.

Forrest has a pretty interesting technique with fittext that we will document soon.

Waypoints is a questionable choice because it relies on jquery but it seems all sites these days use scroll/viewport detection. It may be useful in the future to make this a yeoman generator with opinionated options for susy, waypoints and fittext.

Got a crazy idea to include polymer so that I can easily link docssa style components into whatever page I want to make. The test will be whether I can construct polymer components in a similar manner to docssa.

Polymer was overkill for what I was trying to do. I tried out [Metalsmith](http://www.robinthrift.com/posts/getting-to-know-metalsmith/) which is very nice but for some reason does not work well with Gulp. Now I'm trying out [Gulp as a static site generator](https://medium.com/objects-in-space/considering-a-static-site-tool-learn-gulp-2fd5f9821fc4).

Gulp and gulp-file-include seem to be working great. THe next thing to do is structure the partials, templates and content to be similar to docssa. I'd like to try polymer again but logic behind elements is sort at odds with docssa.
