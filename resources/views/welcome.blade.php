<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial=scale=1.0">
    <title>TryCat</title>
    <link rel="stylesheet" href="/css/app.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <!-- <script src="/js/app.js" defer></script> -->
</head>

<body>
    <div id="game" x-data="({ guessesAllowed: 3, wordLength: 4 })">
        <template x-for="row in Array.from({ length: guessesAllowed })">
            <div class="row">
                <template x-for="tile in Array.from({ length: wordLength })">
                    <div class="tile"></div>
                </template>
            </div>
        </template>
    </div>
</body>

</html>