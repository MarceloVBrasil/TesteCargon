interface IProduct {
    image: string
    name: string
    price: number
}

interface IProductController {
    onClick: (productName: string) => void
}

export default function Product(props: IProduct & IProductController) {
    return (
        <article
            onClick={() => props.onClick(props.name)}
            className="flex shadow-xl rounded-lg p-4 flex-col gap-4 w-6/7 md:w-[530px] cursor-pointer"
        >
            <img src={props.image} alt={props.name} className=" w-[35rem] aspect-square" />
            <div className="flex justify-between">
                <h1 className="font-open-sans-light text-xl pl-2">{props.name}</h1>
                <p className="text-[#CCC] font-open-sans-regular text-xl">${props.price}</p>
            </div>
        </article>
    )
}
