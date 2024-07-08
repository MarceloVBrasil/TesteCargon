import { useMemo, useState } from "react";
import Header from "../../components/Header/Header";

import products from "../../data/data.json"
import Filter from "../../assets/svgs/Filter";
import Product from "../../components/Product/Product";
import Filters from "./components/Filters/Filters";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useSearchParams } from "react-router-dom";
import { filterEsporte, filterMarca, filterPrice, filterTamanho, filterTipo, formatFilterPriceText, getArrayFromQueryParams, removeElement } from "./components/Filters/helpers/FilterHelper";
import AppliedFilter from "../../components/AppliedFilter/AppliedFilter";

export default function HomePage() {
    // drawers
    const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false)
    const [isLFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

    // chosen product
    const [selectedProductName, setSelectedProductName] = useState('')

    // filters
    const [searchParams, setSearchParams] = useSearchParams({ preco: [], marca: [], tamanho: [], tipo: [], esporte: [] })

    const precoSearchParams = useMemo(() => getArrayFromQueryParams(searchParams.get('preco')), [searchParams])
    const marcaSearchParams = useMemo(() => getArrayFromQueryParams(searchParams.get("marca")), [searchParams])
    const tamanhoSearchParams = useMemo(() => getArrayFromQueryParams(searchParams.get("tamanho")), [searchParams])
    const tipoSearchParams = useMemo(() => getArrayFromQueryParams(searchParams.get('tipo')), [searchParams])
    const esporteSearchParams = useMemo(() => getArrayFromQueryParams(searchParams.get('esporte')), [searchParams])

    return (
        <div className="bg-terciary w-full min-h-[100vh]">
            <Header isDrawerOpen={isLinkDrawerOpen} onDrawerClose={toggleLinkDrawer} />

            <div className="bg-white h-20 overflow-x-scroll py-8 flex items-center  px-8 gap-4 relative hide-scrollbar">
                <div className="cursor-pointer block xl:hidden" onClick={toggleFilterDrawer}>
                    <Filter />
                </div>
                {
                    precoSearchParams.length == 0
                        && marcaSearchParams.length == 0
                        && tamanhoSearchParams.length == 0
                        && tipoSearchParams.length == 0
                        && esporteSearchParams.length == 0 ? <p className="font-open-sans-light">Nenhum Filtro aplicado</p>
                        : <div className="flex gap-1">

                            {
                                precoSearchParams.map(param => (
                                    <AppliedFilter key={param} filterValue={param} filterText={formatFilterPriceText(param)} removeFilter={() => removePrecoElement(param)} />
                                ))
                            }

                            {
                                marcaSearchParams.map(param => (
                                    <AppliedFilter key={param} filterValue={param} filterText={param} removeFilter={() => removeMarcaElement(param)} />
                                ))
                            }

                            {
                                tamanhoSearchParams.map(param => (
                                    <AppliedFilter key={param} filterValue={param} filterText={param} removeFilter={() => removeTamanhoElement(param)} />
                                ))
                            }

                            {
                                tipoSearchParams.map(param => (
                                    <AppliedFilter key={param} filterValue={param} filterText={param} removeFilter={() => removeTipoElement(param)} />
                                ))
                            }

                            {
                                esporteSearchParams.map(param => (
                                    <AppliedFilter key={param} filterValue={param} filterText={param} removeFilter={() => removeEsporteElement(param)} />
                                ))
                            }
                        </div>

                }
            </div>

            <div className="flex">
                <Filters
                    isDrawerOpen={isLFilterDrawerOpen}
                    onDrawerClose={toggleFilterDrawer}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />

                <main className="grid pl-8 pb-8 grid-cols-1 lg:grid-cols-2 gap-y-8 place-items-center xl:place-items-start w-full">
                    {
                        products.filter(product => precoSearchParams.length == 0 ? product : filterPrice(product.price, precoSearchParams))
                            .filter(product => marcaSearchParams.length == 0 ? product : filterMarca(product.seller, marcaSearchParams))
                            .filter(product => tamanhoSearchParams.length == 0 ? product : filterTamanho(product.available_sizes, tamanhoSearchParams))
                            .filter(product => tipoSearchParams.length == 0 ? product : filterTipo(product.type, tipoSearchParams))
                            .filter(product => esporteSearchParams.length == 0 ? product : filterEsporte(product.sport, esporteSearchParams))
                            .map(product => (
                                <Product
                                    image={product.image_url}
                                    name={product.name}
                                    price={product.price}
                                    onClick={seeProductDetails}
                                    key={product.name}
                                />
                            ))
                    }
                </main>
            </div>

            {
                selectedProductName && <ProductDetail
                    open={selectedProductName != ''}
                    onCloseModal={closeProductDetails}
                    name={selectedProductName}
                />
            }
        </div>
    )

    function toggleLinkDrawer() {
        setIsLinkDrawerOpen(prev => !prev)
    }

    function toggleFilterDrawer() {
        setIsFilterDrawerOpen(prev => !prev)
    }

    function seeProductDetails(productName: string) {
        setSelectedProductName(productName)
    }

    function closeProductDetails() {
        setSelectedProductName('')
    }

    function removePrecoElement(element: string) {
        const elements = removeElement(element, precoSearchParams)

        setSearchParams(prev => {
            prev.set("preco", elements)
            return prev
        })
    }

    function removeMarcaElement(element: string) {
        const elements = removeElement(element, marcaSearchParams)

        setSearchParams(prev => {
            prev.set("marca", elements)
            return prev
        })
    }

    function removeTamanhoElement(element: string) {
        const elements = removeElement(element, tamanhoSearchParams)

        setSearchParams(prev => {
            prev.set("tamanho", elements)
            return prev
        })
    }

    function removeTipoElement(element: string) {
        const elements = removeElement(element, tipoSearchParams)

        setSearchParams(prev => {
            prev.set("tipo", elements)
            return prev
        })
    }

    function removeEsporteElement(element: string) {
        const elements = removeElement(element, esporteSearchParams)

        setSearchParams(prev => {
            prev.set("esporte", elements)
            return prev
        })
    }
}
