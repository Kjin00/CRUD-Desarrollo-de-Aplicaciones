class Crud {
    private data: {nombre: string, apellido: string, CI: number}[] = [];

    // Crear
    create(item: {nombre: string, apellido: string, CI: number}) {
        this.data.push(item);
        return console.log("Registro Completo");
    }

    // Leer
    read(CI: number) {
        return this.data.find(item => item.CI === CI);
    }

    // Actualizar
    update(CI: number, item: {nombre: string, apellido: string, CI: number}) {
        let index = this.data.findIndex(dataItem => dataItem.CI === CI);
        if (index !== -1) {
            this.data[index] = item;
            console.log("Registro Actualizado");
        } else {
            console.log("No se encontró un registro con ese CI");
        }
    }

    // Eliminar
    delete(CI: number) {
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
