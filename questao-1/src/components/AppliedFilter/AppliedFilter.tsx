interface IAppliedFilter {
    removeFilter: (value: string) => void
    filterValue: string
    filterText: string
}

export default function AppliedFilter(props: IAppliedFilter) {
    return (
        <div onClick={() => props.removeFilter(props.filterValue)}
            className={'bg-secondary hover:bg-yellow-400 w-auto min-w-36 gap-3 justify-center cursor-pointer flex items-center  px-3 rounded-full shadow text-white'}>
            <p className="text-sm">{props.filterText}</p>
            <span className="">&times;</span>
        </div>
    )
}
