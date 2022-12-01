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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <main x-data="game" @keyup.window="onKeyPress($event.key)">
        <span><img src="./img/dog.png" alt="Doogy Word"></span>
        <div id="game">
            <template x-for="(row, index) in board">
                <div class="row" :class="{'current' : currentRowIndex == index,
                            'invalid' : currentRowIndex == index">
                    <template x-for=" tile in row">
                        <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
        </div>
        <div x-text="message" class="message">
        </div>
    </main>
    <div x-data="mywords" class="container mt-4">
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
    </div>

</body>

</html>