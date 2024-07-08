interface IFilterInput {
    inputType: 'radio' | 'checkbox'
    inputName: string
    label: string
    checked: boolean
    value?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FilterInput(props: IFilterInput) {
    return (
        <div className="flex gap-2">
            <input className="hidden" id={props.value} type={props.inputType} checked={props.checked} value={props.value} name={props.inputName} onChange={change} />
            <label
                className={`border py-2 px-4 rounded-md w-auto min-w-32 text-center ${props.checked ? 'bg-primary' : 'bg-terciary'}`}
                htmlFor={props.value}>{props.label}</label>
        </div>
    )

    function change(event: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(event)
    }
}
