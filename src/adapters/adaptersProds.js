//funcion que sirve para adaptar los nombres de la BD, si cambian ahi solo hay que cambiar en este componente

export const adapterProduct = (doc) => {
    const data = doc.data()

    const productosAdaptados = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description
    }

    return productosAdaptados
}