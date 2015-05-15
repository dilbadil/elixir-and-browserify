<html ng-app="app">
	<head>
		<title>Laravel</title>
		
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
		<link href='/css/app-popoint.css' rel='stylesheet' type='text/css'>

	</head>
	<body>
		<div class="container">
            <div ng-controller="CounterController">
                <react-component props="{count: 9}" name="MenubarComponent"></react-component>

                <react-component props="{count: 9}" name="CounterComponent"></react-component>
            </div>
            
            <script src="/js/bundle.js"></script>
		</div>
	</body>
</html>
