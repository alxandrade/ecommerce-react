//Función auxiliar para generar la orden de compra
const ordenGenerada = (nombre, email, telefono, cart, total) => {
    return {
        buyer: {
            name: nombre,
            email: email,
            phone: telefono,
        },
        items: cart,
        total: total,
        created: new Date().toLocaleString()
    }
}

export default ordenGenerada;