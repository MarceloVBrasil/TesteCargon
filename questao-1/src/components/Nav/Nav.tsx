import CustomDrawer, { IDrawerController } from '../Drawer/Drawer'
import { Link } from 'react-router-dom'

export default function Nav(props: IDrawerController) {
    return (
        <>
            <nav className=" gap-8 hidden md:flex">
                <Link to={'/'}>
                    <p className=" cursor-pointer font-open-sans-regular link-text">Esportes</p>
                    <div className="bg-secondary link-border"></div>
                </Link>
                <Link to={'/'}>
                    <p className=" cursor-pointer font-open-sans-regular link-text">Equipamentos</p>
                    <div className="bg-secondary link-border"></div>
                </Link>
                <Link to={'/'}>
                    <p className=" cursor-pointer font-open-sans-regular link-text">Masculino</p>
                    <div className="bg-secondary link-border"></div>
                </Link>
                <Link to={'/'}>
                    <p className=" cursor-pointer font-open-sans-regular link-text">Feminino</p>
                    <div className="bg-secondary link-border"></div>
                </Link>
            </nav>

            <nav onClick={props.onDrawerClose} className="flex md:hidden">
                <div className="h-auto flex flex-col gap-1 cursor-pointer">
                    <div className="bg-black h-[1px] w-8"></div>
                    <div className="bg-black h-[1px] w-8"></div>
                    <div className="bg-black h-[1px] w-8"></div>
                </div>

                <CustomDrawer
                    direction='right'
                    isDrawerOpen={props.isDrawerOpen}
                    onDrawerClose={props.onDrawerClose}
                >
                    <div className="flex flex-col bg-terciary relative">
                        <Link to={'/'} className="h-14 border-b flex gap-2 items-center px-4">
                            ⚽️
                            <p className=" cursor-pointer font-open-sans-regular">Esportes</p>
                        </Link>
                        <Link to={'/'} className="h-14 border-b flex gap-2 items-center px-4">
                            🎒
                            <p className=" cursor-pointer font-open-sans-regular">Equipamentos</p>
                        </Link>
                        <Link to={'/'} className="h-14 border-b flex gap-2 items-center px-4">
                            🙍🏿‍♂️
                            <p className=" cursor-pointer font-open-sans-regular">Masculino</p>
                        </Link>
                        <Link to={'/'} className="h-14 border-b flex gap-2 items-center px-4">
                            👩🏻‍🔧
                            <p className=" cursor-pointer font-open-sans-regular">Feminino</p>
                        </Link>
                    </div>
                </CustomDrawer>
            </nav>
        </>
    )
}
