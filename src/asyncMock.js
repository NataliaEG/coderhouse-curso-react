const products = [
    { 
        id: '1', 
        name: 'Base Cargadora 4 en 1', 
        price: 1000, 
        category: 'cargadores', 
        img:'https://www.megga.com.ar/img_fotos_productos/09131351_BaseCargadora4en1.jpg', 
        stock: 25, 
        description:'Soporte de Carga Inalámbrica en el cual podés cargar hasta 4 dispositivos: dos teléfonos, un auricular con entrada lightning, un Apple Watch o un smartwatch que tenga un cargador circular que entre en la circunferencia donde va. La base cargadora tiene un puerto USB para que así puedas conectar tu smartwatch y cargarlo.'
    },
    { 
        id: '2', 
        name: 'Auriculares Pro Music L300', 
        price: 3000, 
        category: 'auriculares', 
        img:'https://www.megga.com.ar/img_fotos_productos/02171211_AuricularesL300negro.jpg', 
        stock: 16, 
        description:'Disfrutá de un sonido envolvente y de gran calidad. Con función plegable, ideal para guardar en el bolso o cartera.'},
    { 
        id: '3', 
        name: 'Border Color Cam', 
        price: 1200,
        category: 'protectores', 
        img:'https://www.megga.com.ar/img_fotos_productos/06071230_Celeste.jpg', 
        stock: 10,
        description:'Protegé tu teléfono con los nuevos Protectores Border Color Cam. Son transparentes, tipo esmerilado para que se aprecie el teléfono y vienen con bordes de colores. Están realizados con un material rígido y súper resistente.'}

    ]

    export const getProduct = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(products)
            },2000)
        })
    }

    export const getProd = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(products[0])
            },2000)
        })
    }