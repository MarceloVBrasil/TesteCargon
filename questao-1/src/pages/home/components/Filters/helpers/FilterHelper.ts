import { SetURLSearchParams } from "react-router-dom"

function addElement(newElement: string, stringArray: string[]) {
    stringArray.push(newElement)
    const serializedArray = stringArray.join(',')

    return serializedArray
}

function removeElement(repeatedElement: string, stringArray: string[]) {
    const newElements = stringArray.filter(el => el !== repeatedElement)
    const serializedArray = newElements.join(',')

    return serializedArray
}

function getArrayFromQueryParams(queryParam: string | null) {
    return queryParam ? queryParam.split(',') : []
}

function isPriceInRange(lowerBound: number, price: number, upperBound: number): boolean {
    return lowerBound <= price && price <= upperBound
}

function getLowerBoundAndUpperBound(priceRange: string) {
    const [lowerBound, upperBound] = priceRange.split('-')
    return [parseInt(lowerBound), parseInt(upperBound)]
}

function handleFilterChange(key: string, value: string, currentParams: string[], setSearchParams: SetURLSearchParams, searchParams: URLSearchParams) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    let updatedParams;

    if (currentParams.includes(value)) {
        updatedParams = removeElement(value, currentParams);
    } else {
        updatedParams = addElement(value, currentParams);
    }

    newSearchParams.set(key, updatedParams);
    setSearchParams(newSearchParams);
}

function formatFilterPriceText(priceRange: string) {
    const [lowerBound, upperBound] = getLowerBoundAndUpperBound(priceRange)
    return `$${lowerBound} - $${upperBound}`
}

function filterPrice(price: number, priceRanges: string[]) {
    return priceRanges.some(priceRange => {
        const [lowerBound, upperBound] = getLowerBoundAndUpperBound(priceRange)
        return isPriceInRange(lowerBound, price, upperBound)
    })
}

function filterMarca(marca: string, marcas: string[]) {
    return marcas.includes(marca)
}

function filterTamanho(tamanhosDisponiveis: string[], tamanhos: string[]) {
    return tamanhosDisponiveis.some(tamanho => tamanhos.includes(tamanho))
}

function filterTipo(tipo: string, tipos: string[]) {
    return tipos.includes(tipo)
}

function filterEsporte(esporte: string, esportes: string[]) {
    return esportes.includes(esporte)
}

export {
    addElement,
    removeElement,
    getArrayFromQueryParams,
    formatFilterPriceText,
    handleFilterChange,
    filterPrice,
    filterMarca,
    filterTamanho,
    filterTipo,
    filterEsporte
}