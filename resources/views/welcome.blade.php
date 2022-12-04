<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial=scale=1.0">
    <title>DoggyWord</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js"></script>
</head>

<body>
    <main x-data="game" @keyup.window="onKeyPress($event.key)">
        <span><img src="./img/dog.png" alt="Doggy Word"></span>
        <div id="game">
            <template x-for="(row, index) in board">
                <div class="row" :class="{'current' : currentRowIndex == index,
                            'invalid' : currentRowIndex == index && errors}">
                    <template x-for="tile in row">
                        <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
        </div>
        <div x-text="message" class="message text-white">
        </div>
        <div id="keyboard" @click.stop="$event.target.matches('button') && onKeyPress($event.target.textContent)">
            <template x-for="row in letters">
                <div class="row">
                    <template x-for="key in row">
                        <button class="key" :class="matchingTileKey(key)?.status" type="button" x-text="key"></button>
                    </template>
                </div>
            </template>
        </div>
    </main>





    <!-- <div x-data=" mywords" class="container mt-4">
                <h1 x-text="name" class="text-white"></h1>
                <div class="input-group my-3">
                    <input x-model="current" type="text"></input>
                    <button @click="add" class="btn btn-primary position-relative">add
                        <span x-text="list.length"
                            class="badge bg-danger m-lg-0 p-2 position-absolute rounded-pill start-100 text-white top-0"></span></button>
                </div>
                <template x-for="item in list">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span x-text="item"></span>
                        <button @click="remove(item)" class="btn btn-danger btn-small">X</button>
                    </li>
                </template>
                </ul>
            </div> -->

</body>

</html>