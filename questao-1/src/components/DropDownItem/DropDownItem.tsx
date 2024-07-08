import Plus from '../../assets/svgs/Plus'

interface IDropDownItem {
    title: string
    chidren: React.ReactNode
}

export default function DropDownItem(props: IDropDownItem) {
    return (
        <div className="border-b grandpa min-h-14 relative pl-2">
            <p className="font-open-sans-light py-4">{props.title}</p>
            <Plus />
            <div className="parent">
                <div className="child">
                    {props.chidren}
                </div>
            </div>
        </div>
    )
}
