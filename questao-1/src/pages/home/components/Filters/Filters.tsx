import { useMemo, useCallback } from "react";
import CustomDrawer from "../../../../components/Drawer/Drawer";
import DropDownItem from "../../../../components/DropDownItem/DropDownItem";
import FilterInput from "../../../../components/FilterInput.tsx/FilterInput";
import { IDrawerController } from "../../../../components/Drawer/Drawer";
import { SetURLSearchParams } from "react-router-dom";
import { getArrayFromQueryParams, handleFilterChange } from "./helpers/FilterHelper";

interface IFiltersController {
    searchParams: URLSearchParams
    setSearchParams: SetURLSearchParams
}

const divContainerClassName = "flex py-2 flex-wrap items-start gap-4"

export default function Filters(props: IDrawerController & IFiltersController) {
    const precoSearchParams = useMemo(() => getArrayFromQueryParams(props.searchParams.get('preco')), [props.searchParams])
    const marcaSearchParams = useMemo(() => getArrayFromQueryParams(props.searchParams.get("marca")), [props.searchParams])
    const tamanhoSearchParams = useMemo(() => getArrayFromQueryParams(props.searchParams.get("tamanho")), [props.searchParams])
    const tipoSearchParams = useMemo(() => getArrayFromQueryParams(props.searchParams.get('tipo')), [props.searchParams])
    const esporteSearchParams = useMemo(() => getArrayFromQueryParams(props.searchParams.get('esporte')), [props.searchParams])

    const PrecoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="preco" label="Até $100" value="0-100" onChange={onPrecoChange} checked={precoSearchParams.includes('0-100')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$100 - $200" value="100-200" onChange={onPrecoChange} checked={precoSearchParams.includes('100-200')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$200 - $300" value="200-300" onChange={onPrecoChange} checked={precoSearchParams.includes('200-300')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$300 - $400" value="300-400" onChange={onPrecoChange} checked={precoSearchParams.includes('300-400')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$400 - $500" value="400-500" onChange={onPrecoChange} checked={precoSearchParams.includes('400-500')} />
        </div>
    ), [precoSearchParams])

    const MarcaFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="marca" label="Adidas" value="Adidas" onChange={onMarcaChange} checked={marcaSearchParams.includes('Adidas')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Nike" value="Nike" onChange={onMarcaChange} checked={marcaSearchParams.includes('Nike')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Puma" value="Puma" onChange={onMarcaChange} checked={marcaSearchParams.includes('Puma')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Jordan" value="Jordan" onChange={onMarcaChange} checked={marcaSearchParams.includes('Jordan')} />
        </div>
    ), [marcaSearchParams])

    const TamanhoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="tamanho" label="XPP" value="XPP" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('XPP')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="P" value="P" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('P')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="M" value="M" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('M')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="G" value="G" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('G')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="GG" value="GG" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('GG')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="39" value="39" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('39')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="44" value="44" onChange={onTamanhoChange} checked={tamanhoSearchParams.includes('44')} />
        </div>
    ), [tamanhoSearchParams])

    const TipoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="tipo" label="Camiseta" value="Camiseta" onChange={onTipoChange} checked={tipoSearchParams.includes('Camiseta')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Regata" value="Regata" onChange={onTipoChange} checked={tipoSearchParams.includes('Regata')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Calção" value="Calção" onChange={onTipoChange} checked={tipoSearchParams.includes('Calção')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Acessório" value="Acessório" onChange={onTipoChange} checked={tipoSearchParams.includes('Acessório')} />
        </div>
    ), [tipoSearchParams])

    const EsporteFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="esporte" label="Futebol" value="Futebol" onChange={onEsporteChange} checked={esporteSearchParams.includes('Futebol')} />
            <FilterInput inputType="checkbox" inputName="esporte" label="Basquete" value="Basquete" onChange={onEsporteChange} checked={esporteSearchParams.includes('Basquete')} />
            <FilterInput inputType="checkbox" inputName="esporte" label="Corrida" value="Corrida" onChange={onEsporteChange} checked={esporteSearchParams.includes('Corrida')} />
        </div>
    ), [esporteSearchParams])

    return (
        <>
            <CustomDrawer
                direction="left"
                isDrawerOpen={props.isDrawerOpen}
                onDrawerClose={props.onDrawerClose}

            >
                <aside className="">
                    <DropDownItem title="Preço"
                        chidren={<PrecoFilters />}
                    />
                    <DropDownItem title="Marca"
                        chidren={<MarcaFilters />}
                    />
                    <DropDownItem title="Tamanho"
                        chidren={<TamanhoFilters />}
                    />
                    <DropDownItem
                        title="Tipo"
                        chidren={<TipoFilters />}
                    />
                    <DropDownItem
                        title="Esporte"
                        chidren={<EsporteFilters />}
                    />
                </aside>
            </CustomDrawer>

            <aside className="w-96 hidden xl:block border ">
                <DropDownItem title="Preço"
                    chidren={<PrecoFilters />}
                />
                <DropDownItem title="Marca"
                    chidren={<MarcaFilters />}
                />
                <DropDownItem title="Tamanho"
                    chidren={<TamanhoFilters />}
                />

                <DropDownItem
                    title="Tipo"
                    chidren={<TipoFilters />}
                />
                <DropDownItem
                    title="Esporte"
                    chidren={<EsporteFilters />}
                />
            </aside>
        </>
    )

    function onPrecoChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('preco', e.target.value, precoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onMarcaChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('marca', e.target.value, marcaSearchParams, props.setSearchParams, props.searchParams);
    }

    function onTamanhoChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('tamanho', e.target.value, tamanhoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onTipoChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('tipo', e.target.value, tipoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onEsporteChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('esporte', e.target.value, esporteSearchParams, props.setSearchParams, props.searchParams);
    }
}
