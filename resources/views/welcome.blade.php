<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial=scale=1.0">
    <title>TryCat</title>
    <link rel="stylesheet" href="/css/app.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js"></script>
</head>

<body>
    <main x-data="game" @keyup.window="onKeyPress($event.key)">
        <div id="game">
            <template x-for="row in board">
                <div class="row">

                    <template x-for="tile in row">
                        <div class="tile" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
        </div>
        <div x-text="message" class="message">
        </div>
    </main>

    </div>
</body>

</html>