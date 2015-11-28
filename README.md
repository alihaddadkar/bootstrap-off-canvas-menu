## Description
Bootstrap Offcanvas is a jQuery plugin that converts default Bootstrap navbar component into an user-friendly off-canvas side menu in mobile views.

## Demo
[view demo](http://codepen.io/ali_haddadkar/pen/MaMmKY)


## Getting Started

1.Include Bootstrap's stylesheet and the jQuery Bootstrap Offcanvas plugin's CSS in the head section of your web page.

```html
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="../dist/css/bootstrap.offcanvas.min.css">
```


2.Load the jQuery Bootstrap Offcanvas plugin's script after jQuery JavaScript library.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="../dist/js/bootstrap.offcanvas.js"></script>
```

3.Create a button to toggle the off-canvas menu in mobile views.

```html
<button type="button" class="navbar-toggle offcanvas-toggle" data-toggle="offcanvas" 
	data-target="#js-bootstrap-offcanvas" 
    style="float:left;">
  <span class="sr-only">Toggle Button</span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
</button>
```

4.Add the corresponding CSS classes to your Bootstrap navigation bar.

```html
<nav class="navbar navbar-default navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-fade" role="navigation" id="js-bootstrap-offcanvas">
  <div class="container-fluid">
    <div class="navbar-header"> <a class="navbar-brand" href="#">Brand</a>
      <button type="button" class="navbar-toggle offcanvas-toggle pull-right" data-toggle="offcanvas" data-target="#js-bootstrap-offcanvas" style="float:left;"> <span class="sr-only">Toggle navigation</span> <i class="glyphicon glyphicon-remove"></i> </button>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown"> <a href="#" class="dropdown-toggle">Another Link <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li><a href="#">Another Link</a></li>
      </ul>
    </div>
  </div>
</nav>
```

## License
The MIT License (MIT)
