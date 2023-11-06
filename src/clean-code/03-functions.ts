(() => {

    // Gist original: https://gist.github.com/Klerith/d9278895ff5dcacf6f1001d447fb443a

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie { 
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // // Crea un nuevo actor
    // function checkFullName(fullName: string) {
    //     console.log({ fullName }); 
    //     return true;
    // }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        // if (checkFullName(fullName)) return false;
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // Continuación (leccion 18)
    // Gist original: https://gist.github.com/Klerith/42d6d3a2ce5585d701afc67ca7a4a325
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;
    }

})();

