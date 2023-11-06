(() => {

    // Gist original: https://gist.github.com/Klerith/625ef0d0a501f716ed5e3dbdf88396db

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // Tarea: Se cambió 'fs' por 'filesToEvaluate', y 'f' por 'flagged'
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const files = filesToEvaluate.map( f => f.flagged );

    // Malos
    // (Remover temas tecnicos de nombres)
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea (resuelta)
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    // (traducir a inglés)
    const firstName = 'Fernando';
    
    // primer apellido - last name
    // (traducir a inglés)
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();

