const librosParaPoner = [
    ["Eloquent JavaScript", "Marijn Haverbeke", true],
    ["You Do not kwon JS: Async & Performance", "Kyle Simpson", false],
    ["Aprendiendo JavaScript: desde cero hasta ECMAScript 6", "Carlos Azaustre", false],
    ["JavaScript The Good Parts", "Douglas Crockford", true],
    ["JavaScript Design Patterns", "Addy Osmani", true],
];
const biblioteca = {
    libros: [],
    agregarLibro: function (titulo, autor, leido) {
        this.libros.push({ titulo, autor, leido });
    },
    librosPendientes: function () {
        let message = ``;
        for (let libro of this.libros) {
            if (!libro.leido) {
                message += `${libro.titulo}\n`;
            }
        }
        return `Libros pendientes:\n${message}`; // con el \n se genera un "espacio" interlineado para que los elemntos a imprimir se vea de mejor manera
    },
    estadisticas: function () {
        const totalLibros = this.libros.length;
        let librosLeidos = 0;
        for (let libro of this.libros) {
            if (libro.leido) { // si no tinene un = o ><, es que buscara si el valor es TRUE y asi pasar a la accion
                librosLeidos++;
            }
        }
        const porcentajeLeidos = (librosLeidos / totalLibros) * 100;
        const porcentajeNoLeidos = 100 - porcentajeLeidos;
        return `Estadisticas\n - Leidos: ${porcentajeLeidos}%\n - No leidos: ${porcentajeNoLeidos}%`;
    },
};
librosParaPoner.forEach(([titulo, autor, leido]) => {
    biblioteca.agregarLibro(titulo, autor, leido);
});


console.log(biblioteca.librosPendientes());
console.log(biblioteca.estadisticas());
