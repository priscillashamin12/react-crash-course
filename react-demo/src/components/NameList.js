export const NameList = () => {
    const names = ['bruse', 'clark', 'diana']
    return <div>
        {
            names.map((name) => {
            return <h2>{name}</h2>
        })
    }
    </div>
}