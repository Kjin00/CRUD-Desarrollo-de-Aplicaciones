 
    class Crud //Se implementa una clase llamada CRUD
    {           
   private data: {nombre: string, apellido: string, CI: number}[] = []; // Aquí se está declarando un array llamado data. 
                                                                            //Este array va a almacenar objetos que tienen tres propiedades: 
                                                                            //nombre, apellido y CI (Cédula de Identidad). 

   
    create(item: {nombre: string, apellido: string, CI: number}) // Esta es la función para crear un nuevo registro en el array. 
        { this.data.push(item);                                   //Toma un objeto con las propiedades nombre, apellido y CI, y lo añade al array.
        return console.log("Registro Completo");
    }

    read(CI: number) // Esta función busca un registro en el array data basándose en el CI. Si encuentra un registro con esa cédula, lo retorna.
        {
        return this.data.find(item => item.CI === CI);
    }

  
    update(CI: number, item: {nombre: string, apellido: string, CI: number})  //Esta función cusca un registro con la cédula proporcionada  
                                                                              //y si lo encuentra, reemplaza ese registro con el nuevo objeto proporcionado.
        {
        let index = this.data.findIndex(dataItem => dataItem.CI === CI);
        if (index !== -1) {
            this.data[index] = item;
            console.log("Registro Actualizado");
        } else {
            console.log("No se encontró un registro con ese CI");
        }
    }

   
    delete(CI: number) //Esta función busca un registro con la cédula proporcionada y, si lo encuentra, lo elimina del array.
        {
        let index = this.data.findIndex(dataItem => dataItem.CI === CI);
        if (index !== -1) {
            this.data.splice(index, 1);
            console.log("Registro eliminado");
        } else {
            console.log("No se encontró un registro con ese CI");
        }
    }
}

let crud = new Crud();
crud.create({nombre: 'Jose', apellido: 'Querales', CI: 27165788});
console.log(crud.read(27165788));
crud.create({nombre: 'Carlos', apellido: 'Martinez', CI: 16248159});
console.log(crud.read(16248159))
crud.delete(16248157);
crud.update(27165788, {nombre: 'Daniel', apellido: 'Querales', CI: 27165788});
console.log(crud.read(27165788));
