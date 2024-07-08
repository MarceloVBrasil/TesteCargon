import 'react-responsive-modal/styles.css'
import { Modal } from "react-responsive-modal"
import products from "../../data/data.json"
import { useMemo } from 'react'

interface IModal {
    open: boolean
    onCloseModal: () => void
}

interface IProductDetail {
    name: string
}

export default function ProductDetail(props: IModal & IProductDetail) {
    const product = useMemo(() => {
        return products.find(product => product.name === props.name)!;
    }, [props.name]);

    return (
        <Modal
            open={props.open}
            onClose={props.onCloseModal}
            closeIcon={<div className='relative w-full right-4 text-2xl'>&times;</div>}
            classNames={{ modal: 'customModal' }}
        >
            <div className='rounded-md shadow flex flex-col md:flex-row w-full'>
                <img src={product.image_url} alt={product.name} className='w-full md:w-[60%] aspect-video' />
                <div className='w-full relative top-10 px-4'>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Nome:</h2>
                        <h2 className=''>{product.name}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Tipo:</h2>
                        <h2 className=''>{product.type}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Preço:</h2>
                        <h2 className=''>${product.price}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Marca:</h2>
                        <h2 className=''>{product.seller}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Tamanhos:</h2>
                        {
                            product.available_sizes.length ? product.available_sizes.map(size => (
                                <h2 className=''>{size}</h2>
                            )) : <h2 className='uppercase text-red-500'>INDISPONÍVEL</h2>
                        }
                    </div>

                    <div className='flex items-center justify-between border-b h-10'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Esporte:</h2>
                        <h2 className=''>{product.sport}</h2>
                    </div>

                    <div className='flex flex-col gap-2 border-b h-auto pb-12'>
                        <h2 className='font-open-sans-semi-bold text-lg'>Detalhes:</h2>
                        <h2 className=''>{product.details}</h2>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
