function staircase(n) {

    for (let i = 1; i < n + 1; i++) {
        let hash = '', space = ''
        for (let hashes = 0; hashes < i; hashes++) {
            hash += '#'
        }
        for (let spaces = i; spaces < n; spaces++) {
            space += ' '

        }

        console.log(space + hash)
    }

}
staircase(6)

