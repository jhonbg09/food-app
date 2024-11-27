export function formatCurrency(amount: number){
    return new Intl.NumberFormat("en-CO", {
        style: "currency",
        currency: "COP"
    }).format(amount)
}

export function getImagePath(imagePath: string){
    const cloudinaryBaseUrl = "https://res.cloudinary.com"
    if(imagePath.startsWith(cloudinaryBaseUrl)){
        return imagePath
    }else {
        return `/products/${imagePath}.jpg`
    }
}