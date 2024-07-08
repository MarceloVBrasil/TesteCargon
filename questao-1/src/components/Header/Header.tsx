import { IDrawerController } from '../Drawer/Drawer'
import Logo from '../../assets/svgs/Logo'
import Nav from '../Nav/Nav'

export default function Header(props: IDrawerController) {
    return (
        <header className="w-full h-24 pr-8 sm:pr-16 bg-primary flex items-center justify-between shadow">
            <Logo />
            <Nav isDrawerOpen={props.isDrawerOpen} onDrawerClose={props.onDrawerClose} />
        </header>
    )
}
