
const lista = [
    {
        titulo:"excel",
        descricao:"texto",

    },
    {
        titulo:"html",
        descricao:"texto",

    },
    {
        titulo:"css",
        descricao:"texto",

    },
    {
        titulo:"SQL",
        descricao:"texto",

    },
    {
        titulo:"Blender",
        descricao:"texto",

    },
    {
        titulo:"Git",
        descricao:"texto",

    },
]

export default function Apresentacao() {
    return (
        <>
            {lista.map((info,index) => (
                <div key={index}>
                    <ApresentacaoWorkshop titulo = {info.titulo} descricao = {info.descricao} />
                    
                </div>
            ))}
        </>
    )
}

function ApresentacaoWorkshop({titulo,descricao}) {
    return (
        <div>
            <span>
                {titulo}
            </span>
            <span>
                {descricao}
            </span>
        </div>
    )
}
