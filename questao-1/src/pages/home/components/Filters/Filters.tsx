import { useCallback } from "react";
import CustomDrawer from "../../../../components/Drawer/Drawer";
import DropDownItem from "../../../../components/DropDownItem/DropDownItem";
import FilterInput from "../../../../components/FilterInput.tsx/FilterInput";
import { IDrawerController } from "../../../../components/Drawer/Drawer";
import { SetURLSearchParams } from "react-router-dom";
import { handleFilterChange } from "./helpers/FilterHelper";

interface IFiltersController {
    searchParams: URLSearchParams
    setSearchParams: SetURLSearchParams

    precoSearchParams: string[]
    marcaSearchParams: string[]
    tamanhoSearchParams: string[]
    tipoSearchParams: string[]
    esporteSearchParams: string[]
}

const divContainerClassName = "flex py-2 flex-wrap items-start gap-4"

export default function Filters(props: IDrawerController & IFiltersController) {

    const PrecoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="preco" label="Até $100" value="0-100" onChange={onPrecoChange} checked={props.precoSearchParams.includes('0-100')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$100 - $200" value="100-200" onChange={onPrecoChange} checked={props.precoSearchParams.includes('100-200')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$200 - $300" value="200-300" onChange={onPrecoChange} checked={props.precoSearchParams.includes('200-300')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$300 - $400" value="300-400" onChange={onPrecoChange} checked={props.precoSearchParams.includes('300-400')} />
            <FilterInput inputType="checkbox" inputName="preco" label="$400 - $500" value="400-500" onChange={onPrecoChange} checked={props.precoSearchParams.includes('400-500')} />
        </div>
    ), [props.precoSearchParams])

    const MarcaFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="marca" label="Adidas" value="Adidas" onChange={onMarcaChange} checked={props.marcaSearchParams.includes('Adidas')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Nike" value="Nike" onChange={onMarcaChange} checked={props.marcaSearchParams.includes('Nike')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Puma" value="Puma" onChange={onMarcaChange} checked={props.marcaSearchParams.includes('Puma')} />
            <FilterInput inputType="checkbox" inputName="marca" label="Jordan" value="Jordan" onChange={onMarcaChange} checked={props.marcaSearchParams.includes('Jordan')} />
        </div>
    ), [props.marcaSearchParams])

    const TamanhoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="tamanho" label="XPP" value="XPP" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('XPP')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="P" value="P" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('P')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="M" value="M" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('M')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="G" value="G" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('G')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="GG" value="GG" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('GG')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="39" value="39" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('39')} />
            <FilterInput inputType="checkbox" inputName="tamanho" label="44" value="44" onChange={onTamanhoChange} checked={props.tamanhoSearchParams.includes('44')} />
        </div>
    ), [props.tamanhoSearchParams])

    const TipoFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="tipo" label="Camiseta" value="Camiseta" onChange={onTipoChange} checked={props.tipoSearchParams.includes('Camiseta')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Regata" value="Regata" onChange={onTipoChange} checked={props.tipoSearchParams.includes('Regata')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Calção" value="Calção" onChange={onTipoChange} checked={props.tipoSearchParams.includes('Calção')} />
            <FilterInput inputType="checkbox" inputName="tipo" label="Acessório" value="Acessório" onChange={onTipoChange} checked={props.tipoSearchParams.includes('Acessório')} />
        </div>
    ), [props.tipoSearchParams])

    const EsporteFilters = useCallback(() => (
        <div className={divContainerClassName}>
            <FilterInput inputType="checkbox" inputName="esporte" label="Futebol" value="Futebol" onChange={onEsporteChange} checked={props.esporteSearchParams.includes('Futebol')} />
            <FilterInput inputType="checkbox" inputName="esporte" label="Basquete" value="Basquete" onChange={onEsporteChange} checked={props.esporteSearchParams.includes('Basquete')} />
            <FilterInput inputType="checkbox" inputName="esporte" label="Corrida" value="Corrida" onChange={onEsporteChange} checked={props.esporteSearchParams.includes('Corrida')} />
        </div>
    ), [props.esporteSearchParams])

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
        handleFilterChange('preco', e.target.value, props.precoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onMarcaChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('marca', e.target.value, props.marcaSearchParams, props.setSearchParams, props.searchParams);
    }

    function onTamanhoChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('tamanho', e.target.value, props.tamanhoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onTipoChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('tipo', e.target.value, props.tipoSearchParams, props.setSearchParams, props.searchParams);
    }

    function onEsporteChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFilterChange('esporte', e.target.value, props.esporteSearchParams, props.setSearchParams, props.searchParams);
    }
}
