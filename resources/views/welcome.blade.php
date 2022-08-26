<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WsT</title>
    <!-- add icon link -->
    <link rel="icon" type="image/png" href="logo.png">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- css -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    

</head>

<body>
    <div id="root" class="justify-center"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>